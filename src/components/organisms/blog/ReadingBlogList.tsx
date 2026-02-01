import { BlogSectionTitle } from "../../../components/atoms";
import { CategoryCard } from "../../../components/organisms";
import { type JSX } from "react";

const blogCategories = [
  {
    title: "UX/UI",
    image: "/src/assets/laptop-meeting-by-one.png",
  },
  {
    title: "React",
    image: "/src/assets/blog-reading-list-2.png",
  },
  {
    title: "PHP",
    image: "/src/assets/blog-reading-list-3.png",
  },
  {
    title: "JavaScript",
    image: "/src/assets/laptop-coding-cup.png",
  },
];

const ReadingBlogList = (): JSX.Element => {
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

export default ReadingBlogList;
