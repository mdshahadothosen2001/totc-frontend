import type { JSX } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./Avatar";
import { ButtonUI, Card, CardContent } from "../../ui";
import { CourseCategoryBadge as CategoryBadge, CourseDurationBadge as DurationBadge } from "../../molecules";

const coursesData = [
  {
    id: 1,
    image: "/src/assets/laptop-meeting.png",
    overlayImage: "/src/assets/tablet-learning.png",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    instructor: {
      name: "Lina",
      avatar: "/src/assets/lina-square.png",
    },
    category: "Design",
    duration: "3 Month",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 2,
    image: "/src/assets/laptop-mobile.png",
    overlayImage: null,
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    instructor: {
      name: "Lina",
      avatar: "/src/assets/lina-square.png",
    },
    category: "Design",
    duration: "3 Month",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 3,
    image: "/src/assets/laptop3.png",
    overlayImage:
      "/src/assets/tablet-learning.png",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    instructor: {
      name: "Lina",
      avatar: "/src/assets/lina-square.png",
    },
    category: "Design",
    duration: "3 Month",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 4,
    image: "/src/assets/laptop2.png",
    overlayImage: null,
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    instructor: {
      name: "Lina",
      avatar: "/src/assets/lina-square.png",
    },
    category: "Design",
    duration: "3 Month",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
];

export const FeaturedCoursesSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-[url(/src/assets/search-bg.svg)] bg-cover bg-center">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between mb-12 translate-y-[-1rem] animate-fade-in opacity-0">
          <h2 className="[font-family:'Poppins',Helvetica] font-medium text-[#000000] text-3xl tracking-[0.60px]">
            Recommended for you
          </h2>
          <ButtonUI
            variant="link"
            className="[font-family:'Poppins',Helvetica] font-bold text-[#49bbbd] text-xl h-auto p-0 hover:no-underline"
          >
            See all
          </ButtonUI>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {coursesData.map((course, index) => (
            <Card
              key={course.id}
              className="bg-white rounded-[20px] shadow-[0px_18.83px_47.08px_#2f327d1a] border-0 overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 hover:shadow-[0px_24px_60px_#2f327d2a] transition-shadow"
              style={
                {
                  "--animation-delay": `${(index + 1) * 200}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="p-5 flex flex-col gap-4">
                <div className="relative">
                  <img
                    src={course.overlayImage || course.image}
                    alt={course.title}
                    className="w-full h-[239px] rounded-[20px] object-cover"
                  />
                  {course.overlayImage && (
                    <div className="absolute inset-0 bg-[#171b41] rounded-[20px] opacity-10" />
                  )}
                </div>

                <div className="flex justify-between items-center mt-4 mb-2 w-full">
                  <CategoryBadge
                    category={course.category}
                    icon={
                      <div className="w-[21px] h-[21px] grid grid-cols-2 gap-[1px]">
                        <div className="w-2.5 h-2.5 rounded-sm border border-solid border-[#d9d9d9]" />
                        <div className="w-2.5 h-2.5 rounded-sm border border-solid border-[#d9d9d9]" />
                        <div className="w-2.5 h-2.5 rounded-sm border border-solid border-[#d9d9d9]" />
                        <div className="w-2.5 h-2.5 rounded-sm border border-solid border-[#d9d9d9]" />
                      </div>
                    }
                  />

                  <DurationBadge duration={course.duration} />

                </div>

                <div className="flex flex-col gap-5 mt-12">
                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#252641] text-2xl tracking-[0] leading-normal min-h-[77px]">
                    {course.title}
                  </h3>

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-lg tracking-[0.36px] leading-[32.4px] min-h-[102px]">
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-11 h-11">
                      <AvatarImage
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                      />
                      <AvatarFallback className="bg-[#d9d9d9]">
                        {course.instructor.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-[#000000] text-lg tracking-[0.36px]">
                      {course.instructor.name}
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
      </div>
    </section>
  );
};
