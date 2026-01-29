import type { JSX } from "react";
import { SectionHeader } from "../../../molecules";
import { StatsGrid} from "../../../organisms";

const SuccessHighlightsSection = (): JSX.Element => {
  return (
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
  );
};

export default SuccessHighlightsSection;
