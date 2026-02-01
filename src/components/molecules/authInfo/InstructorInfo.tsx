import * as React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../ui";

export interface InstructorInfoProps {
  name: string;
  avatar: string;
  className?: string;
}

const InstructorInfo: React.FC<InstructorInfoProps> = ({
  name,
  avatar,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-[18px] ${className}`}>
      <Avatar className="w-[44px] h-[44px]">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="bg-[#d9d9d9]">
          {name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0.36px] leading-normal whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

export default InstructorInfo;
