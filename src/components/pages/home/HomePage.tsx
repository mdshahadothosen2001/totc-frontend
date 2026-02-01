import type { JSX } from "react";
import { HomeBanner, Footer, StatsGrid, FeaturesGrid } from "../../organisms";
import {
  AboutTotcSection,  
  CapabilitiesSection, 
  // FeaturesOverviewSection, 
  // CourseCatalogSection, 
  UserTestimonialsSection, 
  BlogAndNewsSection 
} from "../home";
import { SectionHeader } from "../../molecules";

const HomePage = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full flex flex-col">
      <HomeBanner />
      {/* Success Highlights Section */}
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <section className="w-full py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Our Success"
              description="Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci."
              className="mb-16 translate-y-[-1rem] animate-fade-in opacity-0"
            />
            <StatsGrid />
          </div>
        </section>
      </div>

      {/* All-In-One Cloud Software Section */}
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <section className="w-full py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title={
                <>
                  <span className="text-[#2f327d]">All-In-One </span>
                  <span className="text-[#00cbb8]">Cloud Software.</span>
                </>
              }
              description="TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office."
              className="mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
            />
            <FeaturesGrid />
          </div>
        </section>
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <AboutTotcSection/>
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <CapabilitiesSection />
      </div>

      {/* <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <FeaturesOverviewSection />
      </div> */}

      {/* <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <CourseCatalogSection />
      </div> */}

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <UserTestimonialsSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
        <BlogAndNewsSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms]">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
