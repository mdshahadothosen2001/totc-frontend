import { type JSX } from "react";
import { NavBar } from "../../molecules";
import { ImageContainer } from "../../atoms";
import { BlogContentCard, RelatedBlogSection, Footer } from "../../../components/organisms";

const BlogDetailsPage = (): JSX.Element => {
    return (
        <div className="bg-white w-full min-h-screen" data-model-id="34:89">
            <NavBar />

            <ImageContainer src="/src/assets/team-meeting.png" />

            <BlogContentCard
                title="Why Swift UI Should Be on the Radar of Every Mobile Developer"
                content="TOTC is a platform that allows educators to create online classes 
                whereby they can store the course materials online; manage assignments, 
                quizzes and exams; monitor due dates; grade results and provide students 
                with feedback all in one place. TOTC is a platform that allows educators 
                to create online classes whereby they can store the course materials online;
                manage assignments, quizzes and exams; monitor due dates; grade results and 
                provide students with feedback all in one place.
                TOTC is a platform that allows educators to create online classes whereby they can store the 
                course materials online; manage assignments, quizzes and exams; monitor due dates; grade 
                results and provide students with feedback all in one place.
                TOTC is a platform TOTC is a platform that allows educators to create online classes whereby 
                they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; 
                grade results and provide students with feedback all in one place.
                TOTC is a platform that allows educators to create online classes whereby they can store 
                the course materials online; manage "
            />

            <RelatedBlogSection />

            <Footer />
        </div>
    );

};

export default BlogDetailsPage;
