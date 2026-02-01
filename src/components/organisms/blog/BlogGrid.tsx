import type { JSX } from "react";
import { default as BlogCard } from "./BlogCard";

const featuredArticle = {
  image: "/src/assets/laptop-meeting.png",
  badge: "NEWS",
  title:
    "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
  description:
    "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  link: "Read more",
};

const sideArticles = [
  {
    image: "/src/assets/tablet-learning.png",
    badge: "PRESS RELEASE",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    description: "Class Technologies Inc., the company that created Class,...",
  },
  {
    image: "/src/assets/laptop-meeting-by-one.png",
    badge: "NEWS",
    title:
      "Zoom's earliest investors are betting millions on a better Zoom for schools",
    description:
      "Zoom was never created to be a consumer product. Nonetheless, the...",
  },
  {
    image: "/src/assets/laptop-cat.png",
    badge: "NEWS",
    title:
      "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
    description:
      "This year, investors have reaped big financial returns from betting on Zoom...",
  },
];

const BlogGrid = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <BlogCard
        image={featuredArticle.image}
        badge={featuredArticle.badge}
        title={featuredArticle.title}
        description={featuredArticle.description}
        link={featuredArticle.link}
        delay={200}
        variant="featured"
      />

      <div className="flex flex-col gap-8">
        {sideArticles.map((article, index) => (
          <BlogCard
            key={index}
            image={article.image}
            badge={article.badge}
            title={article.title}
            description={article.description}
            delay={400 + index * 200}
            variant="side"
          />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
