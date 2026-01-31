import * as React from "react";
import { BadgeUI } from "../../ui";

export interface CategoryBadgeProps {
  category: string;
  icon?: React.ReactNode;
  className?: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  icon,
  className = "",
}) => {
  return (
    <BadgeUI
      variant="secondary"
      className={`bg-white/90 backdrop-blur-sm [font-family:'Poppins',Helvetica] font-medium text-[#696983] text-sm tracking-[0.28px] h-auto py-1 flex items-center gap-2 ${className}`}
    >
      {icon}
      {category}
    </BadgeUI>
  );
};

export default CategoryBadge;
