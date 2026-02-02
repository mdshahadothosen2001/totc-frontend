import React from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { BookOpen } from "lucide-react";

const CourseLessonSidebar: React.FC = () => {
  const changeSimplificationLessons = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    title: "Lesson 01: Introduction about XD",
    duration: "30 mins",
  }));

  const practiceQuizLessons = Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    title: "Lesson 01: Introduction about XD",
    duration: "30 mins",
    bgColor: i % 3 === 0 ? "#FFE5E5" : i % 3 === 1 ? "#FFF4E5" : "#E6F2FF",
  }));

  return (
    <Box
      w="400px"
      bg="#F5F5F5"
      p={6}
      overflowY="auto"
      borderRight="1px solid #E0E0E0"
    >
      <VStack align="stretch" gap={4} mb={8}>
        <Text fontFamily="Poppins" fontSize="18px" fontWeight={600} color="#252641" mb={2}>
          Change Simplification
        </Text>
        {changeSimplificationLessons.map((lesson) => (
          <Box
            key={lesson.id}
            bg="#E6F2FF"
            borderRadius="8px"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            cursor="pointer"
            _hover={{ bg: "#D0E5FF" }}
            transition="all 0.2s"
          >
            <HStack gap={3}>
              <BookOpen size={20} color="#49BBBD" />
              <Text fontFamily="Poppins" fontSize="14px" fontWeight={400} color="#252641">
                {lesson.title}
              </Text>
            </HStack>
            <Text fontFamily="Poppins" fontSize="14px" fontWeight={400} color="#696969">
              {lesson.duration}
            </Text>
          </Box>
        ))}
      </VStack>

      <VStack align="stretch" gap={4}>
        <Text fontFamily="Poppins" fontSize="18px" fontWeight={600} color="#252641" mb={2}>
          PRACTICE QUIZ
        </Text>
        {practiceQuizLessons.map((lesson) => (
          <Box
            key={lesson.id}
            bg={lesson.bgColor}
            borderRadius="8px"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            cursor="pointer"
            _hover={{ opacity: 0.9 }}
            transition="all 0.2s"
          >
            <HStack gap={3}>
              <BookOpen size={20} color="#49BBBD" />
              <Text fontFamily="Poppins" fontSize="14px" fontWeight={400} color="#252641">
                {lesson.title}
              </Text>
            </HStack>
            <Text fontFamily="Poppins" fontSize="14px" fontWeight={400} color="#696969">
              {lesson.duration}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default CourseLessonSidebar;
