import type { JSX } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { ButtonUI } from "../../ui";
import { FeaturedCoursesGrid } from "./FeaturedCourseGrid";

const coursesData = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    image: "/src/assets/laptop-meeting.png",
    instructor: "Lina",
    instructorAvatar:
      "/src/assets/lina-square.png",
    progress: 77,
    currentLesson: 5,
    totalLessons: 7,
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    image: "/src/assets/laptops-mobile.png",
    instructor: "Lina",
    instructorAvatar:
      "/src/assets/lina-square.png",
    progress: 77,
    currentLesson: 5,
    totalLessons: 7,
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect",
    image: "/src/assets/laptop-coding-cup.png",
    instructor: "Lina",
    instructorAvatar:
      "/src/assets/lina-square.png",
    progress: 77,
    currentLesson: 5,
    totalLessons: 7,
  },
];

const FeaturedCoursesSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-[1687px] mx-auto">
        <div className="flex justify-between items-start mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#252641] text-4xl max-w-[966px]">
            Welcome back, ready for your next lesson?
          </h2>
          <ButtonUI
            variant="link"
            className="[font-family:'Poppins',Helvetica] font-bold text-[#49bbbd] text-xl h-auto p-0 hover:no-underline"
          >
            View hisotry
          </ButtonUI>
        </div>

        <div className="relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <FeaturedCoursesGrid courses={coursesData} className="mb-16" />

          <div className="flex justify-end gap-[74px] mb-12">
            <ButtonUI
              variant="ghost"
              size="icon"
              className="w-[50px] h-[50px] rounded-none p-0 hover:bg-transparent"
            >
              <img
                className="w-[50px] h-[50px]"
                alt="Previous"
                src="/src/assets/block-color.png"
              />
              <ChevronLeftIcon className="absolute w-6 h-6 text-white" />
            </ButtonUI>
            <ButtonUI
              variant="ghost"
              size="icon"
              className="w-[50px] h-[50px] rounded-4 p-0 hover:bg-transparent"
            >
              <img
                className="w-[50px] h-[50px]"
                alt="Next"
                src="/src/assets/right-arrow->.png"
              />
              <ChevronRightIcon className="absolute w-6 h-6 text-white bg-[#49BBBD font-bold" />
            </ButtonUI>
          </div>
        </div>

        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#252641] text-4xl max-w-[792px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          Choice favourite course from top category
        </h2>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
