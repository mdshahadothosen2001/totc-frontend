import React, { useState } from "react";
import { Box, Input as ChakraInput, Text } from "@chakra-ui/react";
import PasswordToggle from "./PasswordToggle";

export interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  showPasswordToggle?: boolean;
  w?: string | number;
  h?: string | number;
  position?: React.CSSProperties["position"];
  left?: string | number;
  top?: string | number;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  w,
  h,
  value,
  onChange,
  showPasswordToggle = false,
  position,
  left,
  top,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <Box position={position} left={left} top={top}>
      {/* Input Label */}
      <Text
        fontFamily="Poppins"
        fontWeight="400"
        fontSize="16px"
        lineHeight="24px"
        color="#000000"
        mb="8px"
      >
        {label}
      </Text>

      {/* Input Box */}
      <Box position="relative">
        <ChakraInput
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          size="lg"
          borderRadius="40px"
          border="1px solid #49BBBD"
          bg="#FFFFFF"
          h={h}
          w={w}
          fontFamily="Poppins"
          fontWeight="300"
          fontSize="15px"
          lineHeight="22px"
          px="24px"
          pr={showPasswordToggle ? "50px" : "24px"}
          color="#000000"
          _placeholder={{
            color: "#ACACAC",
            fontWeight: "300",
            fontSize: "15px",
          }}
          _focus={{
            borderColor: "#49BBBD",
            boxShadow: "none",
          }}
          _hover={{
            borderColor: "#49BBBD",
          }}
        />

        {/* Show/Hide Password Toggle */}
        {showPasswordToggle && type === "password" && (
          <PasswordToggle
            show={showPassword}
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </Box>
    </Box>
  );
};

export default Input;
