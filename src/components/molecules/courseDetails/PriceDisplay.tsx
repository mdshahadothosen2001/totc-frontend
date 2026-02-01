import React from "react";

interface PriceDisplayProps {
  currentPrice: string;
  originalPrice?: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  currentPrice,
  originalPrice,
  size = "medium",
  className = ""
}) => {
  const sizeClasses = {
    small: {
      current: "text-2xl",
      original: "text-lg"
    },
    medium: {
      current: "text-[45px]",
      original: "text-[28px]"
    },
    large: {
      current: "text-5xl",
      original: "text-3xl"
    }
  };

  return (
    <div className={`flex items-baseline gap-4 ${className}`}>
      <span className={`[font-family:'Poppins',Helvetica] font-semibold text-black ${sizeClasses[size].current} tracking-[0.90px] leading-[normal]`}>
        {currentPrice}
      </span>
      {originalPrice && (
        <span className={`[font-family:'Poppins',Helvetica] font-semibold text-[#00000080] ${sizeClasses[size].original} tracking-[0.56px] leading-[normal] line-through`}>
          {originalPrice}
        </span>
      )}
    </div>
  );
};

export default PriceDisplay;
