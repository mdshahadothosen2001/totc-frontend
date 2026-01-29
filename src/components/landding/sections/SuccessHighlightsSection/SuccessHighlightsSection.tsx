import { SectionHeader } from "../../../../components/molecules/sectionHeader/SectionHeader" //"../../../../components/molecules/SectionHeader/SectionHeader";
import { StatsGrid } from "../../../../components/organisms/startsGrid" //"../../../../components/organisms/StatsGrid/StatsGrid";

export const SuccessHighlightsSection = (): JSX.Element => {
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
