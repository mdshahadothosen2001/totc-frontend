import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";

export interface TabToggleOption {
  label: string;
  value: string;
}

export interface TabToggleProps {
  options: TabToggleOption[];
  activeValue: string;
  onChange: (value: string) => void;
  className?: string;
}

const TabToggle: React.FC<TabToggleProps> = ({
  options,
  activeValue,
  onChange,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [indicator, setIndicator] = useState<{ left: number; width: number }>({
    left: 13,
    width: 146,
  });

  useLayoutEffect(() => {
    const index = options.findIndex((o) => o.value === activeValue);
    const el = optionRefs.current[index];
    const containerEl = containerRef.current;
    if (el && containerEl) {
      const left = el.offsetLeft;
      const width = el.offsetWidth;
      setIndicator({ left, width });
    }
  }, [activeValue, options]);

  useEffect(() => {
    const onResize = () => {
      const index = options.findIndex((o) => o.value === activeValue);
      const el = optionRefs.current[index];
      const containerEl = containerRef.current;
      if (el && containerEl) {
        setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeValue, options]);

  return (
    <Box
      ref={containerRef}
      position="relative"
      width="329px"
      height="59px"
      bg="rgba(73, 187, 189, 0.6)"
      borderRadius="33px"
      display="flex"
      alignItems="center"
      px="13px"
      className={className}
      overflow="hidden"
    >
      {/* active indicator */}
      <Box
        position="absolute"
        top="10px"
        left={`${indicator.left}px`}
        width="146px"
        height="40px"
        bg="#49BBBD"
        borderRadius="33px"
        transition="left 0.25s ease, width 0.25s ease"
        zIndex={0}
        pointerEvents="none"
      />

      {options.map((option, idx) => {
        const isActive = option.value === activeValue;
        return (
          <Box
            key={option.value}
            as="button"
            ref={(el: HTMLButtonElement | null) =>
              (optionRefs.current[idx] = el)
            }
            flex="1"
            height="59px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="9999px"
            bg="transparent"
            color="#FFFFFF"
            fontSize="16px"
            fontWeight={isActive ? 500 : 400}
            cursor="pointer"
            zIndex={1}
            onClick={() => onChange(option.value)}
            _hover={{}}
            _active={{ transform: "scale(0.98)" }}
          >
            {option.label}
          </Box>
        );
      })}
    </Box>
  );
};

export default TabToggle;
