import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { ButtonUI } from "../../../components/ui";
import { BlogSectionTitle } from "../../../components/atoms";
import { BlogCard } from "../../../components/organisms";
import type { JSX } from "react";

const blogPosts = [
  {
    id: 1,
    image: "https://c.animaapp.com/mkz9q4w59BG82d/img/rectangle-32-4.png",
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    excerpt:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    author: {
      name: "Lina",
      avatar: "https://c.animaapp.com/mkz9q4w59BG82d/img/image-12-1.png",
    },
    views: "251,232",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/mkz9q4w59BG82d/img/group-40-1.png",
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    excerpt:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    author: {
      name: "Lina",
      avatar: "https://c.animaapp.com/mkz9q4w59BG82d/img/image-12-2.png",
    },
    views: "251,232",
  },
];

const RelatedBlogSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24 bg-[#9ccbff] bg-opacity-20">
      <div className="container mx-auto px-8 max-w-[1688px]">
        <div className="flex items-center justify-between mb-12 translate-y-[-1rem] animate-fade-in opacity-0">
          <BlogSectionTitle>Related Blog</BlogSectionTitle>
          <ButtonUI
            variant="link"
            className="[font-family:'Poppins',Helvetica] font-bold text-[#49bbbd] text-xl tracking-[0] p-0 h-auto"
          >
            See all
          </ButtonUI>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              excerpt={post.excerpt}
              author={post.author}
              views={post.views}
              animationDelay={`${200 + index * 200}ms`}
            />
          ))}
        </div>

        <div
          className="flex justify-end gap-[20px] translate-y-[-1rem] animate-fade-in opacity-0"
          style={{ "--animation-delay": "600ms" } as React.CSSProperties}
        >
          <ButtonUI
            size="icon"
            className="w-[50px] h-[50px] rounded-none bg-[#49bbbd] hover:bg-[#3aa5a7] transition-colors"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </ButtonUI>
          <ButtonUI
            size="icon"
            className="w-[50px] h-[50px] rounded-none bg-[#49bbbd] hover:bg-[#3aa5a7] transition-colors"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </ButtonUI>
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogSection;
