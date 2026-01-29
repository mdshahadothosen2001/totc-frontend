import { ClockIcon, Grid3x3Icon } from "lucide-react";
import { BadgeUI } from "../../ui";
import { type JSX } from "react";

export interface MetaInfoProps {
  category: string;
  duration: string;
  className?: string;
}

const MetaInfo = ({
  category,
  duration,
  className = "",
}: MetaInfoProps): JSX.Element => {
  return (
    <>
      <div className={`absolute top-[144px] left-2 flex items-center gap-2.5 ${className}`}>
        <div className="flex items-center justify-center w-[21px] h-[21px]">
          <Grid3x3Icon className="w-5 h-5 text-[#d9d9d9]" />
        </div>
        <BadgeUI
          variant="secondary"
          className="bg-white [font-family:'Poppins',Helvetica] font-medium text-[#696983] text-sm tracking-[0.28px] leading-[25.2px] h-auto py-0 px-0 border-0"
        >
          {category}
        </BadgeUI>
      </div>

      <div className="absolute top-[144px] right-[26px] flex items-center gap-2.5">
        <ClockIcon className="w-6 h-6 text-[#d9d9d9]" />
        <span className="[font-family:'Poppins',Helvetica] font-medium text-[#696983] text-sm tracking-[0.28px] leading-[25.2px] whitespace-nowrap">
          {duration}
        </span>
      </div>
    </>
  );
};

export default MetaInfo;
