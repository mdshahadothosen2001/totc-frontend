import { type JSX } from "react";
import { ButtonUI } from "../../../components/ui";
import { BlogSectionTitle } from "../../../components/atoms";
import { Text } from "../../../components/atoms";
import { BlogHeader } from "../../../components/organisms";
import { HeroSection } from "../sections/heroSection/HeroSection";
import { MarketingArticlesSection } from "../sections/marketing/BlogMarketing";
import { RelatedBlogSection } from "../sections/relatedBlogSection/RelatedBlogSection";
import { Footer } from "../../../components/organisms";

const navigationItems = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "About Us", href: "#" },
];

const BlogPage = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen" data-model-id="34:89">
      <BlogHeader
        navigationItems={navigationItems}
        user={{
          name: "Lina",
          avatarSrc: "https://c.animaapp.com/mkz9q4w59BG82d/img/image-12.png",
        }}
        className="translate-y-[-1rem] animate-fade-in opacity-0"
      />

      <section className="relative w-full bg-gradient-to-b from-[#f8f9fa] to-white px-[114px] py-[77px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="flex items-center justify-between gap-12">
          <div className="flex-1 max-w-[688px]">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-2xl tracking-[0] mb-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
              <span className="text-black">By Themadbrains in </span>
              <span className="font-bold text-[#49bbbd]">inspiration</span>
            </p>

            <BlogSectionTitle
              variant="large"
              className="mb-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]"
            >
              Why Swift UI Should Be on the Radar of Every Mobile Developer
            </BlogSectionTitle>

            <Text
              variant="description"
              className="mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
              elit, sed do eiusmod tempor
            </Text>

            <ButtonUI className="bg-[#49bbbd] hover:bg-[#3da5a7] text-white font-bold text-base px-10 py-5 h-auto rounded-xl transition-colors translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
              Start learning now
            </ButtonUI>
          </div>

          <div className="flex-shrink-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
            <img
              className="w-[779px] h-[527px] object-cover"
              alt="Blog featured image"
              src="https://c.animaapp.com/mkz9q4w59BG82d/img/group-40.png"
            />
          </div>
        </div>
      </section>

      <HeroSection />

      <RelatedBlogSection />

      <section className="relative w-full px-[150px] py-12">
        <img
          className="w-[719px] h-[382px] rounded-[20px] object-cover"
          alt="Article image"
          src="https://c.animaapp.com/mkz9q4w59BG82d/img/rectangle-23.png"
        />
      </section>

      <MarketingArticlesSection />

      <Footer />
    </div>
  );
};

export default BlogPage;
