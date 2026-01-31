import type { JSX } from "react";
import { ButtonUI, Card, CardContent } from "../.../../../ui";

const educationOffers = [
    {
        discount: "50%",
        title: "Lorem ipsum dolor",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor\nLorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        image: "/src/assets/laptop-meeting.png",
    },
    {
        discount: "10%",
        title: "Lorem ipsum dolor",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor\nLorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        image: "/src/assets/tablet-learning.png",
    },
    {
        discount: "50%",
        title: "Lorem ipsum dolor",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor\nLorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        image: "/src/assets/laptop-cat.png",
    },
];

export const EducationOffersSection = (): JSX.Element => {
    return (
        <section className="w-full py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-[1680px] mx-auto">
                <div className="flex items-start justify-between mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                    <h2 className="max-w-[736px] [font-family:'Poppins',Helvetica] font-medium text-black text-3xl tracking-[0.60px] leading-normal">
                        Top Education offers and deals are listed here
                    </h2>
                    <ButtonUI
                        variant="link"
                        className="[font-family:'Poppins',Helvetica] font-bold text-[#49bbbd] text-xl tracking-[0] leading-normal p-0 h-auto hover:no-underline"
                    >
                        See all
                    </ButtonUI>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[71.3px]">
                    {educationOffers.map((offer, index) => (
                        <Card
                            key={`offer-${index}`}
                            className="relative overflow-hidden border-0 shadow-none translate-y-[-1rem] animate-fade-in opacity-0"
                            style={
                                {
                                    "--animation-delay": `${(index + 1) * 200}ms`,
                                } as React.CSSProperties
                            }
                        >
                            <CardContent className="p-0 relative h-[500px]">
                                <img
                                    className="absolute inset-0 w-full h-full object-cover"
                                    alt={`Education offer ${index + 1}`}
                                    src={offer.image}
                                />

                                <div className="absolute top-[45px] left-[46px] w-[126px] h-[124px] bg-[#49bbbd] rounded-[10px] flex items-center justify-center">
                                    <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-[50px] tracking-[0] leading-normal">
                                        {offer.discount}
                                    </span>
                                </div>

                                <div className="absolute bottom-[97px] left-[46px] right-[46px] flex flex-col gap-[9px]">
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

export default EducationOffersSection;
