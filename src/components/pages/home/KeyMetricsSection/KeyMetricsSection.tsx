import type { JSX } from "react";
import { SectionHeader } from "../../../molecules";
import { FeaturesGrid } from "../../../organisms";

const KeyMetricsSection = (): JSX.Element => {
  return (
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
  );
};

export default KeyMetricsSection;
