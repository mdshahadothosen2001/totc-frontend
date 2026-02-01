import { ClockIcon } from "lucide-react";
import * as React from "react";
import { BadgeUI } from "../../ui";

export interface CourseDurationBadgeProps {
  duration: string;
  className?: string;
}

const CourseDurationBadge: React.FC<CourseDurationBadgeProps> = ({
  duration,
  className = "",
}) => {
  return (
    <BadgeUI
      variant="secondary"
      className={`bg-white/90 backdrop-blur-sm [font-family:'Poppins',Helvetica] font-medium text-[#696983] text-sm tracking-[0.28px] h-auto py-1 flex items-center gap-2 ${className}`}
    >
      <ClockIcon className="w-4 h-4 text-[#d9d9d9]" />
      {duration}
    </BadgeUI>
  );
};

export default CourseDurationBadge;
