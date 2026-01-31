import React from "react";
import { Card, CardContent } from "../../ui";
import { default as RatingBar } from "./RatingBar";

interface RatingData {
  stars: string;
  percentage: number;
}

interface RatingSectionProps {
  overallRating: string;
  ratingLabel: string;
  ratings: RatingData[];
  animationDelay?: number;
  className?: string;
}

const RatingSection: React.FC<RatingSectionProps> = ({
  overallRating,
  ratingLabel,
  ratings,
  animationDelay = 0,
  className = ""
}) => {
  return (
    <section
      className={`relative w-[40%] pl-[10%] px-6 py-8 animate-fade-in opacity-0 ${className}`}
      style={{ "--animation-delay": `${animationDelay}ms` } as React.CSSProperties}
    >
      <Card className="bg-[#eaf5ff] border-0 rounded-2xl shadow-none">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start justify-start">
            <div className="flex flex-col items-center bg-white rounded-xl px-4 py-6 shadow-sm w-full md:w-[10%] min-w-[120px]">
              <div className="font-semibold text-gray-700 text-xl md:text-2xl mb-2 text-center md:text-left">
                {overallRating} out of 5
              </div>
              <div className="flex items-center justify-center md:justify-start mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#FFC107]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/>
                  </svg>
                ))}
              </div>
              <div className="text-gray-500 text-sm text-center md:text-left">
                {ratingLabel}
              </div>
            </div>
            <div className="flex-1 w-full flex flex-col gap-3">
              {ratings.map((rating, index) => (
                <RatingBar
                  key={index}
                  stars={rating.stars}
                  percentage={rating.percentage}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default RatingSection;