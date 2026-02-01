import React from "react";

interface CDSectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CDSectionTitle: React.FC<CDSectionTitleProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <h2 className={`[font-family:'Poppins',Helvetica] font-medium text-black text-3xl tracking-[0.60px] leading-[normal] ${className}`}>
      {children}
    </h2>
  );
};

export default CDSectionTitle;
