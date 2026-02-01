import type { JSX } from "react";

export interface PriceProps {
    originalPrice: string;
    discountedPrice: string;
    className?: string;
}

const Price = ({
    originalPrice,
    discountedPrice,
    className = "",
}: PriceProps): JSX.Element => {
    return (
        <div className={`flex items-center gap-3.5 ${className}`}>
            <span className="[font-family:'Poppins',Helvetica] font-light italic text-[#00000080] text-lg tracking-[0.36px] leading-normal line-through whitespace-nowrap">
                {originalPrice}
            </span>
            <span className="[font-family:'Poppins',Helvetica] font-bold text-[#49bbbd] text-2xl tracking-[0.48px] leading-normal whitespace-nowrap">
                {discountedPrice}
            </span>
        </div>
    );
};

export default Price;
