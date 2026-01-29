import type { JSX } from "react";
import { Header, Footer } from "../../organisms";
import { 
  SuccessHighlightsSection, 
  KeyMetricsSection, 
  AboutTotcSection, 
  CapabilitiesSection, 
  FeaturesOverviewSection, 
  CourseCatalogSection, 
  UserTestimonialsSection, 
  BlogAndNewsSection 
} from "../../pages/home";

const HomeTemplate = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full flex flex-col">
      <Header />

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <SuccessHighlightsSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <KeyMetricsSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <AboutTotcSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <CapabilitiesSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <FeaturesOverviewSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <CourseCatalogSection />
      </div>

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

export default HomeTemplate;
