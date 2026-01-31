import React from "react";
import { Card, CardContent } from "../../ui";
import { AuthorInfo } from "../../molecules";
import { CategoryBadge } from "../../molecules";
import { DurationBadge } from "../../molecules";
import { CDPriceDisplay as PriceDisplay } from "../../molecules";

interface CDCourseCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  price: {
    current: string;
    original: string;
  };
  animationDelay?: number;
  className?: string;
}

export const CDCourseCard: React.FC<CDCourseCardProps> = ({
  image,
  title,
  description,
  category,
  duration,
  author,
  price,
  animationDelay = 0,
  className = ""
}) => {
  return (
    <Card
      className={`bg-white rounded-[20px] shadow-[0px_18.83px_47.08px_#2f327d1a] border-0 overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 ${className}`}
      style={{ "--animation-delay": `${animationDelay}ms` } as React.CSSProperties}
    >
      <CardContent className="p-5 space-y-[17px]">
        <div className="relative">
          <img
            className="w-full h-[239px] rounded-[20px] object-cover"
            alt={title}
            src={image}
          />
          <div className="absolute top-4 left-4">
            <CategoryBadge category={category} />
          </div>
          <div className="absolute top-4 right-4">
            <DurationBadge duration={duration} variant="overlay" />
          </div>
        </div>

        <div className="space-y-[21px]">
          <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#252641] text-2xl tracking-[0] leading-[normal]">
            {title}
          </h3>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-lg tracking-[0.36px] leading-[32.4px]">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4">
          <AuthorInfo
            name={author.name}
            avatarUrl={author.avatarUrl}
            avatarSize="small"
            showName={true}
          />
          <PriceDisplay
            currentPrice={price.current}
            originalPrice={price.original}
            size="small"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CDCourseCard;
