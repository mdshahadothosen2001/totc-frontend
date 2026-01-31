import type { JSX } from "react";
import { CategoryGrid } from "./CategoryGrid";

const categories = [
  {
    title: "Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/design-icon.png",
    iconColor: "text-[#49bbbd]",
    iconChar: "",
  },
  {
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/pc-icon.png",
    iconColor: "text-[#5b72ee]",
    iconChar: "",
  },
  {
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/db-icon.png",
    iconColor: "text-[#9dccff]",
    iconChar: "",
  },
  {
    title: "Business",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/profession-icon.png",
    iconColor: "text-[#00cbb8]",
    iconChar: "",
  },
  {
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/marketing-icon.png",
    iconColor: "text-[#f48c06]",
    iconChar: "",
  },
  {
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/file-icon.png",
    iconColor: "text-[#ee645b]",
    iconChar: "",
  },
  {
    title: "Acting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/film-icon.png",
    iconColor: "text-[#252641]",
    iconChar: "",
  },
  {
    title: "Business",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/profession-icon.png",
    iconColor: "text-[#00cbb8]",
    iconChar: "",
  },
];

const CourseCategorySection = (): JSX.Element => {
  return (
    <section className="w-full py-12 px-4">
      <div className="container mx-auto max-w-[1636px]">
        <CategoryGrid categories={categories} />
      </div>
    </section>
  );
};

export default CourseCategorySection;
