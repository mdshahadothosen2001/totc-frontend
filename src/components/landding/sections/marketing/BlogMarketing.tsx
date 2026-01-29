import { Button } from "../../../../components/ui/Button";
import { BlogSectionTitle } from "../../../../components/atoms/sectionTitle";
import { BlogCourseCard } from "../../../../components/organisms/courseCard"
import type { JSX } from "react";

const articles = [
  {
    id: 1,
    image: "https://c.animaapp.com/mkz9q4w59BG82d/img/rectangle-33.png",
    overlayImage: "https://c.animaapp.com/mkz9q4w59BG82d/img/group-249.png",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    author: {
      name: "Lina",
      avatar: "https://c.animaapp.com/mkz9q4w59BG82d/img/image-12-3.png",
    },
    category: "Design",
    duration: "3 Month",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/mkz9q4w59BG82d/img/rectangle-32-4.png",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    author: {
      name: "Lina",
      avatar: "https://c.animaapp.com/mkz9q4w59BG82d/img/image-12-4.png",
    },
    category: "Design",
    duration: "3 Month",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 3,
    image: "https://c.animaapp.com/mkz9q4w59BG82d/img/rectangle-32-4.png",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    author: {
      name: "Lina",
      avatar: "https://c.animaapp.com/mkz9q4w59BG82d/img/image-12-5.png",
    },
    category: "Design",
    duration: "3 Month",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 4,
    image: "https://c.animaapp.com/mkz9q4w59BG82d/img/rectangle-42.png",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    author: {
      name: "Lina",
      avatar: "https://c.animaapp.com/mkz9q4w59BG82d/img/image-12-6.png",
    },
    category: "Design",
    duration: "3 Month",
    originalPrice: "$100",
    discountedPrice: "$80",
  },
];

export const MarketingArticlesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-12 px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1711px] mx-auto">
        <header className="flex items-center justify-between mb-12 translate-y-[-1rem] animate-fade-in opacity-0">
          <BlogSectionTitle>Marketing Articles</BlogSectionTitle>
          <Button
            variant="link"
            className="[font-family:'Poppins',Helvetica] font-bold text-[#49bbbd] text-xl tracking-[0] leading-normal h-auto p-0 hover:no-underline"
          >
            See all
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px]">
          {articles.map((article, index) => (
            <BlogCourseCard
              key={article.id}
              image={article.image}
              overlayImage={article.overlayImage}
              title={article.title}
              description={article.description}
              author={article.author}
              category={article.category}
              duration={article.duration}
              originalPrice={article.originalPrice}
              discountedPrice={article.discountedPrice}
              animationDelay={`${(index + 1) * 200}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
