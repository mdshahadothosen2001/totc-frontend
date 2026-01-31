import * as React from "react";
import { CourseCategoryCard, type CourseCategoryCardProps } from "../../organisms";

export interface CategoryGridProps {
  categories: CourseCategoryCardProps[];
  className?: string;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  className = "",
}) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[74px] ${className}`}
    >
      {categories.map((category, index) => (
        <CourseCategoryCard
          key={`category-${index}`}
          {...category}
          animationDelay={index * 100}
        />
      ))}
    </div>
  );
};
