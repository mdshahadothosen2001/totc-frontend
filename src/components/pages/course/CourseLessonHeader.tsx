import React from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { ArrowLeft, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CourseLessonHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      bg="#E6F2FF"
      w="100%"
      px={8}
      py={6}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack gap={4}>
        <Box
          as="button"
          onClick={() => navigate(-1)}
          w="48px"
          h="48px"
          bg="#B3D9FF"
          borderRadius="8px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          _hover={{ bg: "#99CCFF" }}
          transition="all 0.2s"
          boxShadow="0 2px 4px rgba(0,0,0,0.1)"
        >
          <ArrowLeft size={24} color="#FFFFFF" />
        </Box>

        <VStack align="start" gap={1}>
          <Text fontFamily="Poppins" fontSize="28px" fontWeight={600} color="#252641">
            Learn about Adobe XD & Prototyping
          </Text>
          <Text fontFamily="Poppins" fontSize="16px" fontWeight={400} color="#696969">
            Introduction about XD
          </Text>
        </VStack>
      </HStack>

      <HStack gap={2}>
        <Clock size={20} color="#252641" />
        <Text fontFamily="Poppins" fontSize="18px" fontWeight={400} color="#252641">
          1 hour
        </Text>
      </HStack>
    </Box>
  );
};

export default CourseLessonHeader;
