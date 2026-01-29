import { BlogSectionTitle } from "../../../../components/atoms";
import { CategoryCard } from "../../../../components/organisms";
import { type JSX } from "react";

const blogCategories = [
  {
    title: "UX/UI",
    image: "https://c.animaapp.com/mkz9q4w59BG82d/img/rectangle-34-6.png",
  },
  {
    title: "React",
    image: "https://c.animaapp.com/mkz9q4w59BG82d/img/rectangle-34-7.png",
  },
  {
    title: "PHP",
    image: "https://c.animaapp.com/mkz9q4w59BG82d/img/rectangle-34-5.png",
  },
  {
    title: "JavaScript",
    image: "https://c.animaapp.com/mkz9q4w59BG82d/img/rectangle-34-3.png",
  },
];

const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <BlogSectionTitle
          variant="hero"
          className="translate-y-[-1rem] animate-fade-in opacity-0"
        >
          Reading blog list
        </BlogSectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[76px]">
          {blogCategories.map((category, index) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              animationDelay={`${(index + 1) * 200}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
