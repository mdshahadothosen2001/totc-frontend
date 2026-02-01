import type { JSX } from "react";

export interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

const SectionTitle = ({
    children,
    className = "",
}: SectionTitleProps): JSX.Element => {
    return (
        <h2
            className={`[font-family:'Poppins',Helvetica] font-bold text-4xl tracking-[0] leading-[64.8px] ${className}`}
        >
            {children}
        </h2>
    );
};

export default SectionTitle;
