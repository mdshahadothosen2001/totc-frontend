import React from "react";
import { Box } from "@chakra-ui/react";
import CourseLessonHeader from "./CourseLessonHeader";
import CourseLessonSidebar from "./CourseLessonSidebar";
import CourseLessonForm from "./CourseLessonForm";

const CourseLesson: React.FC = () => {
  return (
    <Box minH="100vh" bg="#F7FAFC">
      <CourseLessonHeader />
      <Box display="flex" w="100%" minH="calc(100vh - 120px)">
        <CourseLessonSidebar />
        <CourseLessonForm />
      </Box>
    </Box>
  );
};

export default CourseLesson;
