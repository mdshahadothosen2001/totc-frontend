import type { JSX } from "react";
import { StatCard } from "../../molecules";

const successStats = [
  {
    value: "15K+",
    label: "Students",
  },
  {
    value: "75 %",
    label: "Total success",
  },
  {
    value: "35",
    label: "Main questions",
  },
  {
    value: "26",
    label: "Chief experts",
  },
  {
    value: "16",
    label: "Years of experience",
  },
];

const StatsGrid = (): JSX.Element => {
  return (
    <div className="flex flex-wrap items-start justify-center gap-12 lg:gap-[95px]">
      {successStats.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          label={stat.label}
          delay={200 + index * 100}
        />
      ))}
    </div>
  );
};

export default StatsGrid;
