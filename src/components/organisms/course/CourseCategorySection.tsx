import type { JSX } from "react";
import { CategoryGrid } from "./CategoryGrid";
import { FaPaintBrush, FaLaptopCode, FaDatabase, FaBriefcase, FaBullhorn, FaCamera, FaTheaterMasks } from "react-icons/fa";

const categories = [
  {
    title: "Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/design-icon.png",
    iconColor: "text-[#49bbbd]",
    iconComponent: <FaPaintBrush size={40} />,
  },
  {
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/pc-icon.png",
    iconColor: "text-[#5b72ee]",
    iconComponent: <FaLaptopCode size={40} />,
  },
  {
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/db-icon.png",
    iconColor: "text-[#9dccff]",
    iconComponent: <FaDatabase size={40} />,
  },
  {
    title: "Business",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/profession-icon.png",
    iconColor: "text-[#00cbb8]",
    iconComponent: <FaBriefcase size={40} />,
  },
  {
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/marketing-icon.png",
    iconColor: "text-[#f48c06]",
    iconComponent: <FaBullhorn size={40} />,
  },
  {
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/file-icon.png",
    iconColor: "text-[#ee645b]",
    iconComponent: <FaCamera size={40} />,
  },
  {
    title: "Acting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/film-icon.png",
    iconColor: "text-[#252641]",
    iconComponent: <FaTheaterMasks size={40} />,
  },
  {
    title: "Business",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
    iconSrc: "/src/assets/profession-icon.png",
    iconColor: "text-[#00cbb8]",
    iconComponent: <FaBriefcase size={40} />,
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
