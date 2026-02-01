import type { JSX } from "react";
import { ClockIcon, Grid3x3Icon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./Avatar";
import { BadgeUI, Card, CardContent } from "../../ui";

const coursesData = [
  {
    id: 1,
    image: "/src/assets/laptop-meeting.png",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    category: "Design",
    duration: "3 Month",
    author: "Lina",
    authorAvatar: "/src/assets/lina-square.png",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 2,
    image: "/src/assets/laptop2.png",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    category: "Design",
    duration: "3 Month",
    author: "Lina",
    authorAvatar: "/src/assets/lina-square.png",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 3,
    image: "/src/assets/laptop1.png",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    category: "Design",
    duration: "3 Month",
    author: "Lina",
    authorAvatar: "/src/assets/lina-square.png",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 4,
    image: "/src/assets/laptop-meeting.png",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    category: "Design",
    duration: "3 Month",
    author: "Lina",
    authorAvatar: "/src/assets/lina-square.png",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 5,
    image: "/src/assets/laptop-meeting.png",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    category: "Design",
    duration: "3 Month",
    author: "Lina",
    authorAvatar: "/src/assets/lina-square.png",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 6,
    image: "/src/assets/laptop2.png",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    category: "Design",
    duration: "3 Month",
    author: "Lina",
    authorAvatar: "/src/assets/lina-square.png",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 7,
    image: "/src/assets/laptop3.png",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    category: "Design",
    duration: "3 Month",
    author: "Lina",
    authorAvatar: "/src/assets/lina-square.png",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 8,
    image: "/src/assets/laptop1.png",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    category: "Design",
    duration: "3 Month",
    author: "Lina",
    authorAvatar: "/src/assets/lina-square.png",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
];

export const HeroSearchFiltersSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-8 md:px-8 lg:px-[120px] mt-[69px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[62px]">
        {coursesData.map((course, index) => (
          <Card
            key={course.id}
            className="group w-full max-w-[374px] mx-auto bg-white rounded-[20px] shadow-[0px_18.83px_47.08px_#2f327d1a] overflow-hidden border-0 transition-transform hover:scale-105 translate-y-[-1rem] animate-fade-in opacity-0"
            style={
              { "--animation-delay": `${index * 100}ms` } as React.CSSProperties
            }
          >
            <CardContent className="p-5 flex flex-col gap-[17px]">
              <div className="relative w-full">
                <div className="relative w-full aspect-[334/239] overflow-hidden rounded-[20px]">
                  <img
                    className="w-full h-full object-cover"
                    alt={course.title}
                    src={course.image}
                  />
                  <div className="absolute inset-0 bg-[#171b41] rounded-[20px] opacity-10" />
                </div>
                <div className="absolute top-[259px] left-[6px] flex items-center gap-2.5">
                  <BadgeUI
                    variant="secondary"
                    className="bg-transparent border-0 p-0 h-auto flex items-center gap-2.5"
                  >
                    <Grid3x3Icon className="w-[21px] h-[21px] text-[#d9d9d9]" />
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-[#696983] text-sm tracking-[0.28px] leading-[25.2px]">
                      {course.category}
                    </span>
                  </BadgeUI>
                </div>
                <div className="absolute top-[259px] right-[6px] flex items-center gap-2.5">
                  <ClockIcon className="w-6 h-6 text-[#d9d9d9]" />
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#696983] text-sm tracking-[0.28px] leading-[25.2px]">
                    {course.duration}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[21px] mt-[42px]">
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#252641] text-2xl tracking-[0] leading-[normal] min-h-[77px]">
                  {course.title}
                </h3>

                <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-lg tracking-[0.36px] leading-[32.4px] min-h-[102px]">
                  {course.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-[18px]">
                  <Avatar className="w-[44px] h-[44px]">
                    <AvatarImage
                      src={course.authorAvatar}
                      alt={course.author}
                    />
                    <AvatarFallback className="bg-[#d9d9d9]">
                      {course.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#000000] text-lg tracking-[0.36px] leading-[normal]">
                    {course.author}
                  </span>
                </div>

                <div className="flex items-center gap-3.5">
                  <span className="[font-family:'Poppins',Helvetica] font-light italic text-[#00000080] text-lg tracking-[0.36px] line-through">
                    {course.originalPrice}
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] font-bold text-[#49bbbd] text-2xl tracking-[0.48px]">
                    {course.discountedPrice}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
