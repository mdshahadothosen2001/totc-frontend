import type { JSX } from "react";

export interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "large" | "hero";
}

const variantClasses = {
    default: "[font-family:'Poppins',Helvetica] font-medium text-black text-3xl tracking-[0.60px]",
    large: "[font-family:'Poppins',Helvetica] font-semibold text-[#2f327d] text-[44px] tracking-[0] leading-tight",
    hero: "[font-family:'Poppins',Helvetica] font-bold text-[#000000cc] text-3xl tracking-[0] leading-normal",
};

const BlogSectionTitle = ({
    children,
    className = "",
    variant = "default",
}: SectionTitleProps): JSX.Element => {
    return (
        <h2 className={`${variantClasses[variant]} ${className}`}>
            {children}
        </h2>
    );
};

export default BlogSectionTitle;
