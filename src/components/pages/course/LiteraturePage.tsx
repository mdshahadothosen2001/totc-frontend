import type { JSX } from "react";
import { NavBar } from "../../molecules";
import { LiteratureBanner } from "../../organisms";
import { TabNavigation } from "../../organisms";
import { Footer, MarketingArticlesSection } from "../../organisms";
import { FeaturedCoursesSection, CourseCategorySection, CourseSection } from "../../organisms";

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
  const handleTabChange = (value: string) => {
    console.log("Tab changed to:", value);
  };

  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[1920px] relative"
      data-model-id="119:251"
    >

      <NavBar />

      <LiteratureBanner />

      <TabNavigation items={tabItems} defaultValue="book" onValueChange={handleTabChange} />

      <FeaturedCoursesSection />
      <CourseCategorySection />
      <CourseSection title="Recommended for you" />
      <CourseSection title="Get choice of your Courses" />
      <MarketingArticlesSection />
      <Footer />
    </div>
  );
};

export default LiteratureCourse;
