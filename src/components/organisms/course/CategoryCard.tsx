import * as React from "react";
import { Card, CardContent } from "../../ui";

export interface CourseCategoryCardProps {
  title: string;
  description: string;
  iconSrc: string;
  iconColor: string;
  iconChar?: string;
  iconComponent?: React.ReactNode;
  animationDelay?: number;
  className?: string;
}

const CourseCategoryCard: React.FC<CourseCategoryCardProps> = ({
  title,
  description,
  iconSrc,
  iconColor,
  iconChar = "",
  iconComponent,
  animationDelay = 0,
  className = "",
}) => {
  return (
    <Card
      className={`translate-y-[-1rem] animate-fade-in opacity-0 bg-white rounded-[20px] shadow-[0px_18.83px_47.08px_#2f327d1a] border-0 transition-transform hover:scale-105 ${className}`}
      style={{ "--animation-delay": `${animationDelay}ms` } as React.CSSProperties}
    >
      <CardContent className="flex flex-col items-center p-8 min-h-[377px]">
        <div className="relative w-[90px] h-[90px] mb-5">
          <img className="w-full h-full" alt={title} src={iconSrc} />
          {iconComponent && (
            <div
              className={`absolute inset-0 flex items-center justify-center ${iconColor}`}
              style={{ pointerEvents: 'none' }}
            >
              {iconComponent}
            </div>
          )}
          {!iconComponent && (
            <div
              className={`absolute top-[27px] left-[30px] ${iconColor} text-3xl font-normal tracking-[0] leading-[normal] whitespace-nowrap`}
            >
              {iconChar}
            </div>
          )}
        </div>
        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-3xl tracking-[0.60px] leading-[normal] mb-[30px] text-center">
          {title}
        </h3>
        <p className="text-[#696983] text-lg text-center tracking-[0.36px] leading-[normal] [font-family:'Poppins',Helvetica] font-normal">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default CourseCategoryCard;
