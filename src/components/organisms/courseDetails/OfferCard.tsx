import React from "react";
import { Card, CardContent } from "../../ui";

interface OfferCardProps {
  image: string;
  title: string;
  description: string;
  percentage: string;
  animationDelay?: number;
  className?: string;
}

export const OfferCard: React.FC<OfferCardProps> = ({
  image,
  title,
  description,
  percentage,
  animationDelay = 0,
  className = ""
}) => {
  return (
    <Card
      className={`relative overflow-hidden border-0 shadow-lg translate-y-[-1rem] animate-fade-in opacity-0 transition-transform hover:scale-105 ${className}`}
      style={{ "--animation-delay": `${animationDelay}ms` } as React.CSSProperties}
    >
      <CardContent className="p-0 relative h-[481px]">
        <img
          className="w-full h-full object-cover"
          alt={title}
          src={image}
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-end items-start p-10">
          {/* Red block with percentage centered */}
          <div className="absolute top-10 left-10">
            <div className="w-[110px] h-[110px] bg-[#FF4D4F] rounded-xl flex items-center justify-center">
              <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-3xl text-center w-full">{percentage}</span>
            </div>
          </div>

          {/* Title and description */}
          <div className="mt-[40px]">
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[32px] text-center tracking-[0] leading-normal mb-6">
              {title}
            </h3>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-2xl tracking-[0.48px] leading-[43.2px] max-w-[405px]">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OfferCard;
