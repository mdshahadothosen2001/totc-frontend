import type { JSX } from "react";
import { HeroSearchFiltersSection } from "./HeroFilter";
import { HeroSearchSection } from "./HeroSearch";
import { FeaturedCoursesGridSection } from "./FeaturedGrid";
import { FeaturedCoursesSection } from "./FeaturedCourse";
import { TestimonialsSection } from "./Testimonial";
import { RecommendedCoursesSection } from "./Recomendation";
import { TopInstructorsSection } from "./Top";
import { Footer } from "../../organisms";
import { NavBar } from "../../molecules";

const Search = (): JSX.Element => {
  return (
    <div
      className="bg-white overflow-hidden w-full flex flex-col"
      data-model-id="106:349"
    >
      <div className="translate-y-[-1rem] animate-fade-in opacity-0">
        <NavBar />
      </div>
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <HeroSearchSection />
      </div>
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <HeroSearchFiltersSection />
      </div>
      <div className="animate-fade-up opacity-0 [--animation-delay:600ms]">
        <FeaturedCoursesGridSection />
      </div>
      <div className="animate-fade-up opacity-0 [--animation-delay:800ms]">
        <FeaturedCoursesSection />
      </div>
      <div className="animate-fade-up opacity-0 [--animation-delay:1000ms]">
        <TestimonialsSection />
      </div>
      <div className="animate-fade-up opacity-0 [--animation-delay:1200ms]">
        <RecommendedCoursesSection />
      </div>
      <div className="animate-fade-up opacity-0 [--animation-delay:1400ms]">
        <TopInstructorsSection />
      </div>
      <div className="animate-fade-up opacity-0 [--animation-delay:1600ms]">
        <Footer />
      </div>
    </div>
  );
};

export default Search;
