import type { JSX } from "react";
import { ButtonUI } from "../../../components/ui";
import { TestimonialCard } from "../../molecules";

const UserTestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  className="h-px w-20 object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/mkz223c55tsHtR/img/line-4.svg"
                />
                <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-[#525596] text-xl tracking-[4.00px] leading-normal">
                  TESTIMONIAL
                </p>
              </div>

              <h2 className="[font-family:'Nunito_Sans',Helvetica] font-bold text-[#2f327d] text-5xl md:text-6xl tracking-[0] leading-normal">
                What They Say?
              </h2>
            </div>

            <div className="space-y-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-2xl md:text-[26px] tracking-[0.52px] leading-[41.6px]">
                TOTC has got more than 100k positive ratings from our users
                around the world.
              </p>

              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-2xl md:text-[26px] tracking-[0.52px] leading-[41.6px]">
                Some of the students and teachers were greatly helped by the
                Skilline.
              </p>

              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-2xl md:text-[26px] tracking-[0.52px] leading-[41.6px]">
                Are you too? Please give your assessment
              </p>
            </div>

            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <ButtonUI
                variant="outline"
                className="h-20 px-10 rounded-[80px] border-[#49bbbd] hover:bg-[#49bbbd]/10 transition-colors"
              >
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#49bbbd] text-[22px] tracking-[0.44px] leading-[35.2px]">
                  Write your assessment
                </span>
                <img
                  className="ml-4 w-12 h-12"
                  alt="Arrow icon"
                  src="https://c.animaapp.com/mkz223c55tsHtR/img/group-32.png"
                />
              </ButtonUI>
            </div>
          </div>

          <div className="relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="relative">
              <img
                className="w-full max-w-[560px] h-auto mx-auto lg:mx-0"
                alt="Testimonial person"
                src="https://c.animaapp.com/mkz223c55tsHtR/img/mask-group.png"
              />

              <img
                className="absolute top-8 right-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                alt="Decorative element"
                src="https://c.animaapp.com/mkz223c55tsHtR/img/group-51.png"
              />
            </div>

            <TestimonialCard
              quote="Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."
              author="Gloria Rose"
              reviewCount="12 reviews at Yelp"
              delay={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTestimonialsSection;
