import type { JSX } from "react";
import { Card, CardContent } from "../../ui";

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps): JSX.Element => {
  return (
    <Card
      className="bg-white rounded-[20px] shadow-[0px_10px_60px_#262c7514] border-0 translate-y-[-1rem] animate-fade-in opacity-0"
      style={
        {
          "--animation-delay": `${delay}ms`,
        } as React.CSSProperties
      }
    >
      <CardContent className="flex flex-col items-center pt-12 pb-10 px-6">
        <img className="w-[180px] h-[180px] mb-8" alt={title} src={icon} />
        <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#2f327d] text-3xl text-center leading-normal mb-6">
          {title}
        </h3>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-xl text-center leading-9">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
