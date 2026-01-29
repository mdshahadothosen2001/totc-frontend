import type { JSX } from "react";

export interface DecorativeCircleProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  className?: string;
}

const sizeMap = {
  sm: "w-[30px] h-[30px]",
  md: "w-[73px] h-[73px]",
  lg: "w-[140px] h-[140px]",
  xl: "w-[264px] h-[264px]",
};

const DecorativeCircle = ({
  size = "md",
  color = "#33efa0",
  className = "",
}: DecorativeCircleProps): JSX.Element => {
  return (
    <div
      className={`${sizeMap[size]} rounded-full ${className}`}
      style={{ backgroundColor: color }}
    />
  );
};

export default DecorativeCircle;
