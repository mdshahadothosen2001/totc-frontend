import React from "react";
import { Card, CardContent } from "../../ui";
import { ButtonUI } from "../../ui";
import { BadgeUI } from "../../ui";
import { PriceDisplay } from "../../atoms";
import { FeatureItem } from "../../molecules";
import { SocialShare } from "../../molecules";

interface PricingCardProps {
  backgroundImage: string;
  price: {
    current: string;
    original: string;
  };
  discount: string;
  timeLeft: string;
  features: Array<{ icon: string; text: string }>;
  trainingDescription: string;
  socialIcons: Array<{ src: string; alt: string; href?: string }>;
  onBuyNow?: () => void;
  animationDelay?: number;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  backgroundImage,
  price,
  discount,
  timeLeft,
  features,
  trainingDescription,
  socialIcons,
  onBuyNow,
  animationDelay = 0,
  className = ""
}) => {
  return (
    <Card
      className={`bg-white rounded-[20px] border-[30px] border-white shadow-none translate-y-[-1rem] animate-fade-in opacity-0 ${className}`}
      style={{ "--animation-delay": `${animationDelay}ms` } as React.CSSProperties}
    >
      <CardContent className="p-0">
        <div
          className="relative w-full h-[268px] bg-cover bg-center rounded-t-[20px] overflow-hidden"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="w-full h-full bg-[#21dd2133]" />
        </div>

        <div className="p-8 space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <PriceDisplay
                currentPrice={price.current}
                originalPrice={price.original}
                size="medium"
              />
              <BadgeUI className="bg-transparent text-[#49bbbd] hover:bg-transparent [font-family:'Poppins',Helvetica] font-semibold text-xl tracking-[0.40px] h-auto px-0">
                {timeLeft}
              </BadgeUI>
            </div>
            <BadgeUI className="bg-transparent text-[#00000080] hover:bg-transparent [font-family:'Poppins',Helvetica] font-semibold text-[28px] tracking-[0.56px] h-auto px-0">
              {discount}
            </BadgeUI>
          </div>

          <ButtonUI
            onClick={onBuyNow}
            className="w-full bg-[#49bbbd] hover:bg-[#3da9ab] rounded-xl h-[63px] [font-family:'Poppins',Helvetica] font-bold text-white text-xl"
          >
            Buy Now
          </ButtonUI>

          <div className="space-y-4 pt-4 border-t">
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-3xl tracking-[0.60px] leading-[normal]">
              This Course included
            </h3>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  text={feature.text}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-3xl tracking-[0.60px] leading-[normal]">
              Training 5 or more people
            </h3>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-sm tracking-[0.28px] leading-[25.2px]">
              {trainingDescription}
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-3xl tracking-[0.60px] leading-[normal]">
              Share this course
            </h3>
            <SocialShare icons={socialIcons} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
