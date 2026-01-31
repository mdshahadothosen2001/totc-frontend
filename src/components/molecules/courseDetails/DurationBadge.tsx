import React from "react";
import { ClockIcon } from "lucide-react";
import { BadgeUI } from "../../ui";

interface CDDurationBadgeProps {
  duration: string;
  variant?: "default" | "overlay";
  className?: string;
}

export const CDDurationBadge: React.FC<CDDurationBadgeProps> = ({
  duration,
  variant = "default",
  className = ""
}) => {
  if (variant === "overlay") {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <ClockIcon className="w-6 h-6 text-[#d9d9d9]" />
        <BadgeUI
          variant="secondary"
          className="bg-white/90 text-[#696983] [font-family:'Poppins',Helvetica] font-medium text-sm"
        >
          {duration}
        </BadgeUI>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <ClockIcon className="w-6 h-6 text-[#d9d9d9]" />
      <span className="[font-family:'Poppins',Helvetica] font-medium text-[#696983] text-sm tracking-[0.28px] leading-[25.2px] whitespace-nowrap">
        {duration}
      </span>
    </div>
  );
};

export default CDDurationBadge;
