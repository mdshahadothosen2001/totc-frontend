import type { JSX } from "react";

export interface StatValueProps {
    value: string;
    className?: string;
}

export const StatValue = ({
    value,
    className = "",
}: StatValueProps): JSX.Element => {
    return (
        <div
            className={`bg-[linear-gradient(90deg,rgba(19,108,181,1)_0%,rgba(73,187,189,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Buenos_Aires_Trial-Light',Helvetica] font-light text-transparent text-8xl tracking-[0] leading-[96px] whitespace-nowrap ${className}`}
        >
            {value}
        </div>
    );
};

export default StatValue;
