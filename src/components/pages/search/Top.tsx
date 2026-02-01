import type { JSX } from "react";
import { ButtonUI, Card, CardContent } from "../../ui";

const offersData = [
  {
    discount: "50%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor\nLorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    image: "/src/assets/laptop-meeting.png",
    badgeLeft: "left-[52px]",
  },
  {
    discount: "10%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor\nLorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    image: "/src/assets/tablet-learning.png",
    badgeLeft: "left-[60px]",
  },
  {
    discount: "50%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor\nLorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    image: "/src/assets/laptop-cat.png",
    badgeLeft: "left-[53px]",
  },
];

export const TopInstructorsSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-[139px] py-[70px]">
      <div className="max-w-[1650px] mx-auto">
        <header className="flex justify-between items-start mb-[115px] translate-y-[-1rem] animate-fade-in opacity-0">
          <h2 className="max-w-[723px] [font-family:'Poppins',Helvetica] font-medium text-[#000000] text-3xl tracking-[0.60px] leading-normal">
            Top Education offers and deals are listed here
          </h2>
          <ButtonUI
            variant="link"
            className="[font-family:'Poppins',Helvetica] font-bold text-[#49bbbd] text-xl tracking-[0] leading-normal p-0 h-auto hover:no-underline"
          >
            See all
          </ButtonUI>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[70px]">
          {offersData.map((offer, index) => (
            <Card
              key={`offer-${index}`}
              className="relative w-full h-[500px] overflow-hidden border-0 shadow-none translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] hover:scale-[1.02] transition-transform duration-300"
              style={
                {
                  "--animation-delay": `${(index + 1) * 200}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="p-0 h-full relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={`Offer ${offer.discount} off`}
                  src={offer.image}
                />

                <div className="absolute top-[45px] left-[45px] w-[124px] h-[124px] bg-[#49bbbd] rounded-[10px]" />

                <div
                  className={`absolute top-[70px] ${offer.badgeLeft} [font-family:'Poppins',Helvetica] font-bold text-white text-[50px] tracking-[0] leading-normal`}
                >
                  {offer.discount}
                </div>

                <div className="absolute top-[197px] left-[45px] right-[45px] flex flex-col gap-[9px]">
                  <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[28px] tracking-[0] leading-normal">
                    {offer.title}
                  </h3>

                  <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-xl tracking-[0.40px] leading-9 whitespace-pre-line">
                    {offer.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
