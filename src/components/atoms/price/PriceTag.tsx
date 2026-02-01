import * as React from "react";

export interface PriceTagProps {
  originalPrice: string | number;
  discountedPrice: string | number;
  className?: string;
}

const PriceTag: React.FC<PriceTagProps> = ({
  originalPrice,
  discountedPrice,
  className = "",
}) => {
  const formatPrice = (price: string | number) => {
    return typeof price === "number" ? `$${price}` : price;
  };

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <span className="[font-family:'Poppins',Helvetica] font-light italic text-[#00000080] text-lg tracking-[0.36px] line-through leading-normal whitespace-nowrap">
        {formatPrice(originalPrice)}
      </span>
      <span className="[font-family:'Poppins',Helvetica] font-bold text-[#49bbbd] text-2xl tracking-[0.48px] leading-normal whitespace-nowrap">
        {formatPrice(discountedPrice)}
      </span>
    </div>
  );
};

export default PriceTag;
