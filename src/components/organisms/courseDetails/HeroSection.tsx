import React from "react";

interface HeroSectionProps {
  backgroundImage: string;
  tabs?: string[];
  animationDelay?: number;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  animationDelay = 0,
  className = "",
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[652px] bg-cover bg-top animate-fade-in opacity-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          "--animation-delay": `${animationDelay}ms`,
        } as React.CSSProperties}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </div>
  );
};

export default HeroSection;