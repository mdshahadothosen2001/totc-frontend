import type { JSX } from "react";
import { CourseHeader } from "../../organisms";
import { CourseGrid } from "./CourseGrid";

interface CourseSectionProps {
  title: string;
}

const coursesData = [
  {
    id: 1,
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    image: "/src/assets/tablet-learning.png",
    category: "Design",
    categoryIcon: <img src="/src/assets/four-block.png" alt="category icon" className="w-4 h-4" />,
    duration: "3 Month",
    instructor: {
      name: "Lina",
      avatar: "/src/assets/lina-square.png",
    },
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 2,
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    image: "/src/assets/laptop-meeting.png",
    category: "Design",
    categoryIcon: <img src="/src/assets/four-block.png" alt="category icon" className="w-4 h-4" />,
    duration: "3 Month",
    instructor: {
      name: "Lina",
      avatar: "/src/assets/lina-square.png",
    },
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 3,
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    image: "/src/assets/tablet-learning.png",
    category: "Design",
    categoryIcon: <img src="/src/assets/four-block.png" alt="category icon" className="w-4 h-4" />,
    duration: "3 Month",
    instructor: {
      name: "Lina",
      avatar: "/src/assets/lina-square.png",
    },
    originalPrice: "$100",
    discountedPrice: "$80",
  },
  {
    id: 4,
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    image: "/src/assets/laptop-meeting.png",
    category: "Design",
    categoryIcon: <img src="/src/assets/four-block.png" alt="category icon" className="w-4 h-4" />,
    duration: "3 Month",
    instructor: {
      name: "Lina",
      avatar: "/src/assets/lina-square.png",
    },
    originalPrice: "$100",
    discountedPrice: "$80",
  },
];

const CourseSection = ({
  title,
}: CourseSectionProps): JSX.Element => {
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1646px] mx-auto">
        <CourseHeader title={title} />
        <CourseGrid courses={coursesData} />
      </div>
    </section>
  );
};

export default CourseSection;
