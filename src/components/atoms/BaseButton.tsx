import React from "react";
import { Button } from "@chakra-ui/react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  w?: string | number;
  h?: string | number;
  fontSize?: string | number;
  borderRadius?: string | number;
  className?: string;
}

const variantProps: Record<ButtonVariant, any> = {
  primary: {
    bg: "#49BBBD",
    color: "white",
    border: "0",
    borderWidth: "0",
    borderColor: "transparent",
    borderRadius: "12px",
    fontWeight: "bold",
    fontSize: "16px",
    px: "32px",
    py: "16px",
    height: "auto",
    minH: "52px",
    outline: "none",
    textAlign: "center",
    _hover: {
      bg: "#3fa3a5",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(73, 187, 189, 0.3)",
      border: "0",
      borderWidth: "0",
    },
    _active: {
      bg: "#358789",
      transform: "translateY(0)",
      border: "0",
      borderWidth: "0",
    },
    _focus: {
      boxShadow: "0 0 0 3px rgba(73, 187, 189, 0.3)",
      border: "0",
      borderWidth: "0",
    },
    _disabled: {
      bg: "#d1d1d1",
      color: "#8a8a8a",
      cursor: "not-allowed",
      border: "0",
      borderWidth: "0",
      _hover: {
        bg: "#d1d1d1",
        transform: "none",
        boxShadow: "none",
        border: "0",
        borderWidth: "0",
      },
    },
  },
  secondary: {
    bg: "rgba(187, 187, 187, 0.5)",
    color: "#696969",
    border: "0",
    borderWidth: "0",
    borderColor: "transparent",
    borderRadius: "12px",
    fontWeight: "bold",
    fontSize: "16px",
    px: "32px",
    py: "16px",
    height: "auto",
    minH: "52px",
    outline: "none",
    textAlign: "center",
    _hover: {
      bg: "#49BBBD",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(105, 105, 105, 0.3)",
      border: "0",
      borderWidth: "0",
    },
    _active: {
      bg: "#444444",
      transform: "translateY(0)",
      border: "0",
      borderWidth: "0",
    },
    _focus: {
      boxShadow: "0 0 0 3px rgba(105, 105, 105, 0.3)",
      border: "0",
      borderWidth: "0",
    },
    _disabled: {
      bg: "#d1d1d1",
      color: "#8a8a8a",
      cursor: "not-allowed",
      border: "0",
      borderWidth: "0",
      _hover: {
        bg: "#d1d1d1",
        transform: "none",
        boxShadow: "none",
        border: "0",
        borderWidth: "0",
      },
    },
  },
  outline: {
    bg: "transparent",
    color: "#49BBBD",
    border: "2px solid #49BBBD",
    borderRadius: "12px",
    fontWeight: "bold",
    fontSize: "16px",
    px: "32px",
    py: "16px",
    height: "auto",
    minH: "52px",
    textAlign: "center",
    _hover: {
      bg: "#49BBBD",
      color: "white",
    },
    _active: {
      bg: "#3fa3a5",
      color: "white",
    },
    _disabled: {
      borderColor: "#d1d1d1",
      color: "#8a8a8a",
      cursor: "not-allowed",
      _hover: {
        bg: "transparent",
        color: "#8a8a8a",
      },
    },
  },
  ghost: {
    bg: "transparent",
    color: "#49BBBD",
    border: "0",
    borderWidth: "0",
    borderColor: "transparent",
    borderRadius: "12px",
    fontWeight: "bold",
    fontSize: "16px",
    px: "32px",
    py: "16px",
    height: "auto",
    minH: "52px",
    outline: "none",
    textAlign: "center",
    _hover: {
      bg: "rgba(73, 187, 189, 0.1)",
      border: "0",
      borderWidth: "0",
    },
    _active: {
      bg: "rgba(73, 187, 189, 0.2)",
      border: "0",
      borderWidth: "0",
    },
    _focus: {
      boxShadow: "0 0 0 3px rgba(73, 187, 189, 0.3)",
      border: "0",
      borderWidth: "0",
    },
    _disabled: {
      color: "#8a8a8a",
      cursor: "not-allowed",
      border: "0",
      borderWidth: "0",
      _hover: {
        bg: "transparent",
        border: "0",
        borderWidth: "0",
      },
    },
  },
};

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  w,
  h,
  fontSize,
  borderRadius,
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <Button
      size={size}
      isDisabled={disabled}
      className={className}
      transition="all 0.3s ease"
      {...variantProps[variant]}
      width={w || (fullWidth ? "100%" : "auto")}
      height={h || "auto"}
      fontSize={fontSize}
      borderRadius={borderRadius}
      {...(props as any)}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
