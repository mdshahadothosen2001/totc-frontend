import React from "react";
import { Progress } from "../../ui";

interface RatingBarProps {
  stars: string;
  percentage: number;
  className?: string;
}

export const RatingBar: React.FC<RatingBarProps> = ({
  stars,
  percentage,
  className = ""
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="w-16 text-gray-500 text-sm text-right">{stars}</div>
      <div className="flex-1">
        <Progress
          value={percentage}
          className="h-2 bg-gray-200 rounded-full"
          indicatorClassName="bg-[#3ec6de] rounded-full"
        />
      </div>
    </div>
  );
};

export default RatingBar;
