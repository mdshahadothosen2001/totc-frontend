import React from "react";
import { Card } from "../../atoms";
import ImageContainer from "../../atoms/ImageContainer";

interface LiteratureCourseCardProps {
  image: string;
  title: string;
  price: string | number;
}

const LiteratureCourseCard: React.FC<LiteratureCourseCardProps> = ({ image, title, price }) => {
  return (
    <Card
      className="flex flex-col items-center 
  shadow-[2px_2px_10px_2px_rgba(0,0,0,0.25)] 
  rounded-[12px] bg-white 
  px-4 sm:px-6 pt-6 pb-8 
  w-[630px] 
  h-auto"
    >
      <div className="w-full h-auto rounded-[12px] overflow-hidden mb-6 flex items-center justify-center bg-[#f5f5f5]">
        <ImageContainer src={image} w="100%" h="100%" borderRadius={12} objectFit="contain" />
      </div>
      <div className="flex w-full items-center justify-between px-3 sm:px-4 mt-auto gap-2">
        <span className="[font-family:'Poppins',Helvetica] 
        font-normal text-[rgba(0,0,0,0.8)] 
        text-base sm:text-lg md:text-xl leading-[1.2] 
        tracking-[0.02em]
        "
        >
          {title}
        </span>
        <span className="[font-family:'Poppins',Helvetica] 
        font-extrabold text-lg sm:text-2xl md:text-3xl leading-[1.1] 
        tracking-[0.02em] text-[rgba(73,187,189,0.8)] ml-2
        "
        >
          {typeof price === "number" ? `$${price}` : price}
        </span>
      </div>
    </Card>
  );
};

export default LiteratureCourseCard;
