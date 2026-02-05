import React from "react";
import { NavBar } from "../molecules";
import { HeroSection } from "../organisms";
import { PricingCard } from "../organisms";
import { RatingSection } from "../organisms";
import { OfferCard } from "../organisms";
import { ArticlePreview } from "../organisms";
import {
  Footer,
  MarketingArticlesSection,
} from "../organisms";
import { CDSectionTitle as SectionTitle } from "../organisms";
import { ButtonUI } from "../ui";


interface CourseDetailTemplateProps {
  header: {
    navItems: Array<{ label: string; href: string; isActive?: boolean }>;
    user: { name: string; avatarUrl: string };
  };
  hero: {
    backgroundImage: string;
    tabs: string[];
  };
  pricing: {
    backgroundImage: string;
    price: { current: string; original: string };
    discount: string;
    timeLeft: string;
    features: Array<{ icon: string; text: string }>;
    trainingDescription: string;
    socialIcons: Array<{ src: string; alt: string; href?: string }>;
  };
  courses: Array<{
    image: string;
    title: string;
    description: string;
    category: string;
    duration: string;
    author: { name: string; avatarUrl: string };
    price: { current: string; original: string };
  }>;
  articlePreview: {
    author: { name: string; avatarUrl: string };
    preview: string;
    duration: string;
  };
  ratings: {
    overallRating: string;
    ratingLabel: string;
    ratings: Array<{ stars: string; percentage: number }>;
  };
  classroomFeatures: {
    title: string;
    description: string;
    image: string;
  };
  offers: Array<{
    image: string;
    title: string;
    description: string;
    percentage: string;
  }>;
  footer: {
    links: Array<{ label: string; href: string }>;
  };
}

export const CourseDetailTemplate: React.FC<CourseDetailTemplateProps> = ({
  hero,
  pricing,
  articlePreview,
  ratings,
  classroomFeatures,
  offers,
}) => {
  return (
    <div>
      <NavBar />
      
      <div className="bg-white overflow-hidden w-full min-w-[1920px] relative">
        <div className="relative w-full flex flex-col gap-52">
          <div className="flex flex-col gap-8">

            <HeroSection
              backgroundImage={hero.backgroundImage}
              animationDelay={200}
            />
            {/* Tabs Section: Rendered after hero image */}
            <div className="w-full flex justify-start mt-[-20px] ml-[180px] z-10 relative">
              <div className=" rounded-xl px-2 py-2 flex gap-[50px]">
                {hero.tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={
                      `bg-[#0000001a] rounded-xl px-[50px] py-[17px] font-bold text-[#00000066] text-xl [font-family:'Poppins',Helvetica] transition-colors ` +
                      (index === 0 ? 'bg-[#49bbbd] text-white' : '')
                    }
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <RatingSection
              overallRating={ratings.overallRating}
              ratingLabel={ratings.ratingLabel}
              ratings={ratings.ratings}
              animationDelay={400}
            />

            <section className="w-full max-w-[853px] pl-[10%] px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <ArticlePreview
                author={articlePreview.author}
                preview={articlePreview.preview}
                duration={articlePreview.duration}
              />
            </section>
            <section className="w-full max-w-[853px] pl-[10%] px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <ArticlePreview
                author={articlePreview.author}
                preview={articlePreview.preview}
                duration={articlePreview.duration}
              />
            </section>

            <div className="absolute top-[329px] left-1/2 -translate-x-1/2 w-full max-w-[1643px] px-4 mt-[323px]">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_501px] gap-8">
                <div className="space-y-8" />
                <PricingCard
                  backgroundImage={pricing.backgroundImage}
                  price={pricing.price}
                  discount={pricing.discount}
                  timeLeft={pricing.timeLeft}
                  features={pricing.features}
                  trainingDescription={pricing.trainingDescription}
                  socialIcons={pricing.socialIcons}
                  animationDelay={600}
                />
              </div>
            </div>
          </div>

          <div className="bg-[#9dccff4c]">
            <MarketingArticlesSection />
          </div>

        </div>

        {/* <section className="relative w-full bg-[#9ccbff] opacity-20 h-[898px]" /> */}

        <section className="relative w-full py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                <div className="absolute -top-8 -left-8 w-[73px] h-[73px] bg-[#33efa0] rounded-full" />

                <div className="relative pl-4">
                  <h2 className="[font-family:'Poppins',Helvetica] font-medium text-4xl leading-[57.6px] mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                    <span className="text-[#2f327d]">{classroomFeatures.title.split('you can do with TOTC')[0]}</span>
                    <span className="text-[#00cbb8]">you can do with TOTC</span>
                  </h2>

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-2xl tracking-[0.48px] leading-[43.2px] mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                    {classroomFeatures.description}
                  </p>

                  <ButtonUI
                    variant="link"
                    className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-[22px] leading-[39.6px] underline p-0 h-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
                  >
                    Learn more
                  </ButtonUI>
                </div>
              </div>

              <div className="relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                <div className="absolute -top-12 -left-12 w-[138px] h-[138px] bg-[#23bdee] rounded-[20px]" />
                <div className="absolute -bottom-8 -right-8 w-[231px] h-[231px] bg-[#33efa0] rounded-[20px]" />

                <div className="relative z-10">
                  <img
                    className="w-full h-auto rounded-[20px] object-cover"
                    alt="Classroom"
                    src={classroomFeatures.image}
                  />
                </div>

                <img
                  className="absolute -bottom-12 -left-16 w-[30px] h-[30px]"
                  alt="Decorative"
                  src="/src/assets/round-color.png"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 translate-y-[-1rem] animate-fade-in opacity-0 max-w-[1643px] mx-auto">
            <SectionTitle>
              Top&nbsp;&nbsp;Education offers and deals are listed here
            </SectionTitle>
            <ButtonUI
              variant="link"
              className="[font-family:'Poppins',Helvetica] font-bold text-[#49bbbd] text-xl tracking-[0] leading-normal p-0 h-auto hover:no-underline"
            >
              See all
            </ButtonUI>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-[1643px] mx-auto">
            {offers.map((offer, index) => (
              <div key={index} style={{ width: 506, height: 481 }} className="flex">
                <OfferCard
                  image={offer.image}
                  title={offer.title}
                  description={offer.description}
                  percentage={offer.percentage}
                  animationDelay={(index + 1) * 200}
                  className="w-[506px] h-[481px]"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};
