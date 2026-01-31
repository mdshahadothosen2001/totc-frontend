import * as React from "react";
import { CourseCard, type CourseCardProps } from "../../organisms";

type CourseCardWithIconProps = CourseCardProps & { categoryIcon?: React.ReactNode };


export interface CourseGridProps {
  courses: CourseCardWithIconProps[];
  className?: string;
}

export const CourseGrid: React.FC<CourseGridProps> = ({
  courses,
  className = "",
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] ${className}`}
    >
      {courses.map((course, index) => (
        <CourseCard
          key={course.id}
          {...course}
          categoryIcon={course.categoryIcon}
          animationDelay={(index + 1) * 200}
        />
      ))}
    </div>
  );
};
