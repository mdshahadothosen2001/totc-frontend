import type { JSX } from "react";
import { SectionTitle } from "../../atoms";
import { SectionDescription } from "../../atoms";

export interface SectionHeaderProps {
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export const SectionHeader = ({
  title,
  description,
  className = "",
}: SectionHeaderProps): JSX.Element => {
  return (
    <div className={`text-center ${className}`}>
      <SectionTitle className="mb-4">{title}</SectionTitle>
      {description && (
        <SectionDescription className="max-w-[837px] mx-auto">
          {description}
        </SectionDescription>
      )}
    </div>
  );
};

export default SectionHeader;
