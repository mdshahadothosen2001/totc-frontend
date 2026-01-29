import type { JSX } from "react";
import { Card, CardContent } from "../../ui";
import { StarRating } from "../../atoms";

export interface TestimonialCardProps {
  quote: string;
  author: string;
  reviewCount: string;
  delay?: number;
}

export const TestimonialCard = ({
  quote,
  author,
  reviewCount,
  delay = 0,
}: TestimonialCardProps): JSX.Element => {
  return (
    <Card
      className="mt-8 lg:mt-[-120px] lg:ml-16 relative z-10 bg-white rounded-[20px] shadow-[2px_4px_60px_#292c7c1a] border-0 overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0"
      style={
        {
          "--animation-delay": `${delay}ms`,
        } as React.CSSProperties
      }
    >
      <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-[#f67766] rounded-[20px_0px_0px_20px]" />

      <CardContent className="p-8 pl-12">
        <div className="flex gap-8">
          <img
            className="w-px h-[139px] object-cover flex-shrink-0"
            alt="Decorative line"
            src="https://c.animaapp.com/mkz223c55tsHtR/img/line-3.svg"
          />

          <div className="space-y-6">
            <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-[#5e5e7e] text-[22px] tracking-[0.44px] leading-[39.6px]">
              {quote}
            </p>

            <div className="space-y-2">
              <p className="[font-family:'Nunito_Sans',Helvetica] font-semibold text-[#5e5e7e] text-2xl tracking-[0] leading-[43.2px]">
                {author}
              </p>

              <div className="flex items-center gap-3">
                <StarRating />
                <p className="[font-family:'Nunito_Sans',Helvetica] font-semibold text-[#80819a] text-lg tracking-[0.36px] leading-[32.4px]">
                  {reviewCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
