import * as React from "react";
// import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../ui";
import { InstructorInfo } from "../../molecules";
import { CourseProgress } from "../../molecules";

export interface FeaturedCourseCardProps {
  id: number;
  title: string;
  image: string;
  instructor: string;
  instructorAvatar: string;
  progress: number;
  currentLesson: number;
  totalLessons: number;
  animationDelay?: number;
  className?: string;
}
export const FeaturedCourseCard: React.FC<FeaturedCourseCardProps> = ({
  title,
  image,
  instructor,
  instructorAvatar,
  progress,
  currentLesson,
  totalLessons,
  animationDelay = 0,
  className = "",
}) => {
  // const navigate = useNavigate();
  const handleClick = () => {
    window.history.pushState({}, '', '/course/details');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  return (
    <Card
      className={`bg-white rounded-[20px] shadow-[0px_18.83px_47.08px_#2f327d1a] border-0 overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 cursor-pointer ${className}`}
      style={{ "--animation-delay": `${animationDelay}ms` } as React.CSSProperties}
      onClick={handleClick}
    >
      <CardContent className="p-5">
        <div className="relative mb-3">
          <img
            className="w-full h-[258px] rounded-[20px] object-cover"
            alt={title}
            src={image}
          />
          <div className="absolute inset-0 bg-[#171b41] rounded-[20px] opacity-10" />
        </div>

        <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#252641] text-2xl mb-4 line-clamp-2">
          {title}
        </h3>

        <div className="mb-6">
          <InstructorInfo name={instructor} avatar={instructorAvatar} />
        </div>

        <CourseProgress
          progress={progress}
          currentLesson={currentLesson}
          totalLessons={totalLessons}
        />
      </CardContent>
    </Card>
  );
};
