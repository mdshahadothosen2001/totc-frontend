import type { JSX } from "react";

export interface SectionDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

const SectionDescription = ({
    children,
    className = "",
}: SectionDescriptionProps): JSX.Element => {
    return (
        <p
            className={`[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-2xl tracking-[0] leading-[43.2px] ${className}`}
        >
            {children}
        </p>
    );
};

export default SectionDescription;
