import * as React from "react";
import { Progress } from "../../ui";

export interface CourseProgressProps {
  progress: number;
  currentLesson: number;
  totalLessons: number;
  className?: string;
}

const CourseProgress: React.FC<CourseProgressProps> = ({
  progress,
  currentLesson,
  totalLessons,
  className = "",
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <Progress value={progress} className="h-2 bg-[#d9d9d9]" />
      <div className="flex justify-end">
        <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#00000080] text-sm">
          Lesson {currentLesson} of {totalLessons}
        </span>
      </div>
    </div>
  );
};

export default CourseProgress;
