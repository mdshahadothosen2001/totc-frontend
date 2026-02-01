import { NavBar } from '../molecules'
import { FeaturedCoursesSection, CourseCategorySection, CourseSection, MarketingArticlesSection, Footer } from '../organisms'

const Home = () => {
  return (
    <div>
      <NavBar />
      <CourseCategorySection />

      <CourseSection title="Recommended for you" />

      <CourseSection title="Get choice of your Courses" />

      <FeaturedCoursesSection />

      <MarketingArticlesSection />

      <Footer />
    </div>
  )
}

export default Home