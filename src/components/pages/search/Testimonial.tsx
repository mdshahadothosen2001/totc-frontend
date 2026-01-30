import type { JSX } from "react";
import { ButtonUI } from "../../ui";
import { Card, CardContent } from "../../ui";

const testimonials = [
  {
    name: "Jane Cooper",
    image: "https://c.animaapp.com/ml0tlc5743oHtU/img/image-10-5.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  },
  {
    name: "Adam",
    image: "https://c.animaapp.com/ml0tlc5743oHtU/img/image-10-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  },
  {
    name: "Tomara",
    image: "https://c.animaapp.com/ml0tlc5743oHtU/img/image-10-2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  },
  {
    name: "Jane Cooper",
    image: "https://c.animaapp.com/ml0tlc5743oHtU/img/image-10-5.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  },
  {
    name: "Jane Cooper",
    image: "https://c.animaapp.com/ml0tlc5743oHtU/img/image-10-5.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  },
  {
    name: "Jane Cooper",
    image: "https://c.animaapp.com/ml0tlc5743oHtU/img/image-10-5.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-12 md:py-[90px]">
      <div className="max-w-[1646px] mx-auto">
        <div className="flex items-start justify-between mb-12 md:mb-[50px] translate-y-[-1rem] animate-fade-in opacity-0">
          <h2 className="[font-family:'Poppins',Helvetica] font-medium text-[#000000] text-2xl md:text-3xl tracking-[0.60px] leading-normal">
            Classes tought by real creators
          </h2>
          <ButtonUI
            variant="link"
            className="[font-family:'Poppins',Helvetica] font-bold text-[#49bbbd] text-xl tracking-[0] leading-normal p-0 h-auto hover:no-underline"
          >
            See all
          </ButtonUI>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
          {testimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${index}`}
              className="translate-y-[-1rem] animate-fade-in opacity-0"
              style={
                {
                  "--animation-delay": `${(index + 1) * 200}ms`,
                } as React.CSSProperties
              }
            >
              <Card className="relative pt-[138px] border-0 shadow-[2px_2px_10px_2px_#00000040] transition-transform hover:scale-105">
                <img
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[278px] h-[277px] object-cover rounded-full"
                  alt={testimonial.name}
                  src={testimonial.image}
                />
                <CardContent className="pt-[23px] pb-[49px] px-[69px] text-center">
                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#252641] text-2xl tracking-[0] leading-normal mb-[12px]">
                    {testimonial.name}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-lg tracking-[0.36px] leading-[32.4px]">
                    {testimonial.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
