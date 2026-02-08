import type { JSX } from "react";
import { useState } from "react";
import { NavBar } from "../../molecules";
import { LiteratureBanner } from "../../organisms";
import { TabNavigation } from "../../organisms";
import { Footer } from "../../organisms";
import LiteratureCourseCard from "../../organisms/courseCard/LiteratureCourseCard";
import { Pagination } from "../../atoms";
import { useLiteratureCourseList } from "../../../hooks/course/LiteratureCourseList";

const tabItems = [
  { id: "about", label: "About" },
  { id: "course", label: "Course" },
  { id: "notes", label: "Notes" },
  { id: "project", label: "Project" },
  { id: "podcast", label: "Podcast" },
  { id: "book", label: "Book" },
  { id: "review", label: "Review" },
];


const LiteratureCourse = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(20);
  const { courses = [], pagination } = useLiteratureCourseList({ page: currentPage, page_size: rowsPerPage });

  const handleTabChange = (value: string) => {
    console.log("Tab changed to:", value);
  };

  const handleRowsPerPageChange = (rows: number) => {
    setRowsPerPage(rows);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white overflow-hidden w-full relative" data-model-id="119:251">
      
      <NavBar />

      <LiteratureBanner />
      
      {/* Tab Navigation */}
      <TabNavigation
        items={tabItems}
        defaultValue="book"
        onValueChange={handleTabChange}
        className="hidden md:block"
      />

      <section className="w-full max-w-[90%] mx-auto mt-[100px] px-6 sm:px-10 lg:px-32 py-16 bg-[#f8f8f8]">


        {/* Course Listing Section */}
        <div>
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#252641] text-3xl mb-10">Literature Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-items-center">
            {courses.map((course, idx) => (
              <LiteratureCourseCard
                key={course.title + idx}
                image={course.image}
                title={course.title}
                price={course.discounted_price || ''}
              />
            ))}
          </div>
        </div>

        {/* Pagination Section */}
        {(() => {
          const shouldShowPagination = (pagination?.count ?? (courses?.length || 0)) > 0;
          const handlePageChange = (p: number) => setCurrentPage(p);

          return (
            shouldShowPagination && (
              <div className="mt-3 md:mt-5">
                <Pagination
                  currentPage={currentPage}
                  totalPages={pagination?.num_pages ?? 1}
                  rowsPerPage={rowsPerPage}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleRowsPerPageChange}
                />
              </div>
            )
          );
        })()}

      </section>

      <Footer />
    </div>
  );
};

export default LiteratureCourse;
