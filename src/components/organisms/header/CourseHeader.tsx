import * as React from "react";
import { SectionTitle } from "../../atoms";
import { SeeAllLink } from "../../atoms";

export interface CourseHeaderProps {
  title: string;
  onSeeAll?: () => void;
  className?: string;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({
  title,
  onSeeAll,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-between mb-12 translate-y-[-1rem] animate-fade-in opacity-0 ${className}`}
    >
      <SectionTitle>{title}</SectionTitle>
      <SeeAllLink onClick={onSeeAll} />
    </div>
  );
};

export default CourseHeader;
