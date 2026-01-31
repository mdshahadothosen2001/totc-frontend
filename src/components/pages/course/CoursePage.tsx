import type { JSX } from "react";
import { NavBar } from "../../molecules";
import { FeaturedCoursesSection, CourseCategorySection, CourseSection } from "../../organisms";
import { Footer } from "../../organisms";

export const Course = (): JSX.Element => {
  return (
    <div
      className="bg-white w-full min-w-[1920px] overflow-x-hidden"
      data-model-id="47:247"
    >
      <NavBar />

      <main className="w-full">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <FeaturedCoursesSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <CourseCategorySection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <CourseSection title="Recommended for you" />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <CourseSection title="Get choice of your Courses" />
        </div>

        <section className="w-full flex justify-center my-12">
          <div
            className="bg-[#252641] rounded-[37px] w-[90vw] max-w-[1682px] min-h-[200px] flex flex-col items-center justify-center py-12 px-4 text-center shadow-lg"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Online coaching lessons for remote learning.
            </h2>
            <p className="text-white text-base md:text-lg max-w-2xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <button
              className="bg-[#49BBBD] text-white rounded-[12px] w-[236px] h-[63px] flex items-center justify-center font-poppins font-bold text-[16px] leading-6 hover:bg-[#3ea3a5] transition-colors shadow-md"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Start learning now
            </button>
          </div>
        </section>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <CourseSection title="The course in personal development" />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <CourseSection title="Student are viewing" />
        </div>
      </main>

      <footer className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <Footer />
      </footer>
    </div>
  );
};
