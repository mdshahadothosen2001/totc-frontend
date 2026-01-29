import type { JSX } from "react";

export interface TextProps {
    children: React.ReactNode;
    className?: string;
    variant?: "body" | "caption" | "subtitle" | "description";
    as?: "p" | "span" | "div";
}

const variantClasses = {
    body: "[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-xl tracking-[0.40px] leading-9",
    caption: "[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-lg tracking-[0.36px] leading-[32.4px]",
    subtitle: "[font-family:'Poppins',Helvetica] font-medium text-[#b2b3cf] text-[26px] text-center tracking-[1.04px] leading-[normal]",
    description: "[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-2xl tracking-[0.48px] leading-[43.2px]",
};

const Text = ({
    children,
    className = "",
    variant = "body",
    as: Component = "p",
}: TextProps): JSX.Element => {
    return (
        <Component className={`${variantClasses[variant]} ${className}`}>
            {children}
        </Component>
    );
};

export default Text;
