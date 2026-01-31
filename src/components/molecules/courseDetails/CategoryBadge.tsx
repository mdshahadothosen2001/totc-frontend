import React from "react";
import { Grid3x3Icon } from "lucide-react";
import { BadgeUI } from "../../ui";

interface CDCategoryBadgeProps {
  category: string;
  className?: string;
}

export const CDCategoryBadge: React.FC<CDCategoryBadgeProps> = ({
  category,
  className = ""
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Grid3x3Icon className="w-[21px] h-[21px] text-[#d9d9d9]" />
      <BadgeUI
        variant="secondary"
        className="bg-white/90 text-[#696983] [font-family:'Poppins',Helvetica] font-medium text-sm"
      >
        {category}
      </BadgeUI>
    </div>
  );
};

export default CDCategoryBadge;
