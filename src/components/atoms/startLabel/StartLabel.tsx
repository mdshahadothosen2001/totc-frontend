import type { JSX } from "react";

export interface StatLabelProps {
    label: string;
    className?: string;
}

export const StatLabel = ({
    label,
    className = "",
}: StatLabelProps): JSX.Element => {
    return (
        <div
            className={`[font-family:'Buenos_Aires_Trial-Regular',Helvetica] font-normal text-half-dark-text-color text-[32px] tracking-[0] leading-[41.6px] whitespace-nowrap ${className}`}
        >
            {label}
        </div>
    );
};

export default StatLabel;
