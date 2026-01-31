import * as React from "react";
import {
  FeaturedCourseCard,
  type FeaturedCourseCardProps,
} from "./FeaturedCourseCard";

export interface FeaturedCoursesGridProps {
  courses: FeaturedCourseCardProps[];
  className?: string;
}

export const FeaturedCoursesGrid: React.FC<FeaturedCoursesGridProps> = ({
  courses,
  className = "",
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ${className}`}
    >
      {courses.map((course, index) => (
        <FeaturedCourseCard
          key={course.id}
          {...course}
          animationDelay={400 + index * 200}
        />
      ))}
    </div>
  );
};
