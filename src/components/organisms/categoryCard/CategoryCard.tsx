import type { JSX } from "react";
import { Card, CardContent } from "../../ui";

export interface CategoryCardProps {
  title: string;
  image: string;
  animationDelay?: string;
  className?: string;
}

const CategoryCard = ({
  title,
  image,
  animationDelay = "0ms",
  className = "",
}: CategoryCardProps): JSX.Element => {
  return (
    <Card
      className={`group relative overflow-hidden rounded-[20px] border-0 shadow-none bg-transparent cursor-pointer transition-transform hover:scale-105 translate-y-[-1rem] animate-fade-in opacity-0 ${className}`}
      style={{ "--animation-delay": animationDelay } as React.CSSProperties}
    >
      <CardContent className="p-0 relative h-[327px]">
        <img
          className="absolute inset-0 w-full h-full rounded-[20px] object-cover"
          alt={title}
          src={image}
        />
        <div className="absolute inset-0 bg-[#171b41] rounded-[20px] opacity-10" />

        <div className="absolute bottom-[67px] left-1/2 -translate-x-1/2 bg-[#ffffffb2] w-[236px] h-[63px] rounded-xl flex items-center justify-center">
          <span className="[font-family:'Poppins',Helvetica] font-bold text-[#000000cc] text-2xl tracking-[0] leading-normal">
            {title}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
