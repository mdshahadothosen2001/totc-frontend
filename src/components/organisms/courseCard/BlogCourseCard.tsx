import { Card, CardContent } from "../../ui";
import { AuthorInfo } from "../../molecules";
import { MetaInfo } from "../../molecules";
import { Price } from "../../atoms";
import { Text } from "../../atoms";
import type { JSX } from "react";

export interface CourseCardProps {
  image: string;
  overlayImage?: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatarSrc: string;
  };
  category: string;
  duration: string;
  originalPrice: string;
  discountedPrice: string;
  animationDelay?: string;
  className?: string;
}

const BlogCourseCard = ({
  image,
  overlayImage,
  title,
  description,
  author,
  category,
  duration,
  originalPrice,
  discountedPrice,
  animationDelay = "0ms",
  className = "",
}: CourseCardProps): JSX.Element => {
  return (
    <Card
      className={`group relative bg-white rounded-[20px] shadow-[0px_18.83px_47.08px_#2f327d1a] border-0 overflow-hidden hover:shadow-[0px_24px_60px_#2f327d2a] transition-shadow translate-y-[-1rem] animate-fade-in opacity-0 ${className}`}
      style={{ "--animation-delay": animationDelay } as React.CSSProperties}
    >
      <CardContent className="p-5 pb-6">
        <div className="relative mb-6">
          <div className="relative w-full h-[239px] rounded-[20px] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            {overlayImage && (
              <img
                src={overlayImage}
                alt="Overlay"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            )}
            {!overlayImage && (
              <div className="absolute top-0 left-0 w-full h-full bg-[#171b41] rounded-[20px] opacity-10" />
            )}
          </div>

          <MetaInfo category={category} duration={duration} />
        </div>

        <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#252641] text-2xl tracking-[0] leading-normal mb-5 min-h-[77px]">
          {title}
        </h3>

        <Text variant="caption" className="mb-6 min-h-[102px]">
          {description}
        </Text>

        <div className="flex items-center justify-between">
          <AuthorInfo name={author.name} avatarSrc={author.avatarSrc} />
          <Price originalPrice={originalPrice} discountedPrice={discountedPrice} />
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCourseCard;
