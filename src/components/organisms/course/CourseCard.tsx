import * as React from "react";
import { Card, CardContent } from "../../ui";
import { CategoryBadge } from "../../molecules";
import { DurationBadge } from "../../molecules";
import { InstructorInfo } from "../../molecules";
import { PriceTag } from "../../atoms";

export interface CourseCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  instructor: {
    name: string;
    avatar: string;
  };
  category: string;
  duration: string;
  originalPrice: string | number;
  discountedPrice: string | number;
  animationDelay?: number;
  className?: string;
  categoryIcon?: React.ReactNode;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  description,
  instructor,
  category,
  duration,
  originalPrice,
  discountedPrice,
  animationDelay = 0,
  className = "",
  categoryIcon,
}) => {
  return (
    <Card
      className={`group bg-white rounded-[20px] shadow-[0px_18.83px_47.08px_#2f327d1a] overflow-hidden border-0 hover:shadow-[0px_24px_60px_#2f327d2a] transition-shadow translate-y-[-1rem] animate-fade-in opacity-0 ${className}`}
      style={{ "--animation-delay": `${animationDelay}ms` } as React.CSSProperties}
    >
      <CardContent className="p-5 flex flex-col gap-[17px]">
        <div className="relative">
          <img
            className="w-full h-[239px] rounded-[20px] object-cover"
            alt={title}
            src={image}
          />
          <div className="absolute inset-0 bg-[#171b41] rounded-[20px] opacity-10" />
        </div>

          <div className="flex justify-between items-center mt-4 mb-2 w-full">
            <CategoryBadge category={category} icon={categoryIcon} />
            <DurationBadge duration={duration} />
          </div>

        <div className="flex flex-col gap-[21px] mt-[42px]">
          <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#252641] text-2xl tracking-[0] leading-normal min-h-[77px]">
            {title}
          </h3>

          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-lg tracking-[0.36px] leading-[32.4px] min-h-[102px]">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4">
          <InstructorInfo name={instructor.name} avatar={instructor.avatar} />
          <PriceTag
            originalPrice={originalPrice}
            discountedPrice={discountedPrice}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
