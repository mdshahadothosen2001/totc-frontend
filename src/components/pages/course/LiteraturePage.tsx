import type { JSX } from "react";
import { useState } from "react";
import { NavBar } from "../../molecules";
import { LiteratureBanner } from "../../organisms";
import { TabNavigation } from "../../organisms";
import { Footer } from "../../organisms";
import LiteratureCourseCard from "../../organisms/courseCard/LiteratureCourseCard";
import { PrimaryButton, SecondaryButton } from "../../atoms";
import { literatureCourses } from "../../../constants/literatureCourses";

const tabItems = [
  { id: "about", label: "About" },
  { id: "course", label: "Course" },
  { id: "notes", label: "Notes" },
  { id: "project", label: "Project" },
  { id: "podcast", label: "Podcast" },
  { id: "book", label: "Book" },
  { id: "review", label: "Review" },
];

const COURSES_PER_PAGE = 6;

const LiteratureCourse = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(literatureCourses.length / COURSES_PER_PAGE);

  const handleTabChange = (value: string) => {
    console.log("Tab changed to:", value);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const paginatedCourses = literatureCourses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  return (
    <div className="bg-white overflow-hidden w-full relative" data-model-id="119:251">
      <NavBar />
      <LiteratureBanner />
      <TabNavigation
        items={tabItems}
        defaultValue="book"
        onValueChange={handleTabChange}
        className="hidden md:block"
      />

      <section className="w-full max-w-[90%] mx-auto mt-[100px] px-6 sm:px-10 lg:px-32 py-16 bg-[#f8f8f8]">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#252641] text-3xl mb-10">Literature Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-items-center">
          {paginatedCourses.map((course, idx) => (
            <LiteratureCourseCard
              key={course.title + idx}
              image={course.image}
              title={course.title}
              price={course.discountedPrice || ''}
            />
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center gap-4">
          <SecondaryButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            aria-label="Previous page"
            title="Previous page"
          >
            {'<'}
          </SecondaryButton>
          {Array.from({ length: totalPages }, (_, i) => (
            <PrimaryButton
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? "bg-[#358789]" : ""}
            >
              {i + 1}
            </PrimaryButton>
          ))}
          <SecondaryButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            title="Next page"
          >
            {'>'}
          </SecondaryButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LiteratureCourse;
