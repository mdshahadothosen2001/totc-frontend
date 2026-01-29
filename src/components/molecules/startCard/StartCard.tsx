import type { JSX } from "react";
import { StatLabel } from "../../atoms/startLabel/StartLabel";
import { StatValue } from "../../atoms/startValue/StartValue";

export interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export const StatCard = ({
  value,
  label,
  delay = 0,
}: StatCardProps): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center translate-y-[-1rem] animate-fade-in opacity-0"
      style={
        {
          "--animation-delay": `${delay}ms`,
        } as React.CSSProperties
      }
    >
      <StatValue value={value} />
      <StatLabel label={label} />
    </div>
  );
};

export default StatCard;
