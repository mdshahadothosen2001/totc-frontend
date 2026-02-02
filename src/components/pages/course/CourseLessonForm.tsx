import React, { useState } from "react";
import { Box, Text, VStack, Textarea, Input as ChakraInput } from "@chakra-ui/react";
import { PrimaryButton } from "../../atoms";

const CourseLessonForm: React.FC = () => {
  const [formData, setFormData] = useState({
    eventName: "Adobe XD Auto - Animate: Your Guide to Creating",
    startDate: "September 24, 2017 07:59 am",
    endDate: "September 24, 2017 07:59 am",
    location: "2118 Thornridge Cir, Syracuse, Connecticut 35624",
    notification: "30 mins",
    email: "jessica.hansome@example.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Save event:", formData);
  };

  return (
    <Box flex={1} bg="#FFFFFF" p={8} overflowY="auto">
      <Text fontFamily="Poppins" fontSize="24px" fontWeight={600} color="#252641" mb={4}>
        Create new event
      </Text>

      <Text fontFamily="Poppins" fontSize="16px" fontWeight={400} color="#696969" mb={6} lineHeight="24px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </Text>

      <VStack align="stretch" gap={6} maxW="800px">
        <Box>
          <Text fontFamily="Poppins" fontSize="16px" fontWeight={400} color="#000000" mb={2}>
            Event Name
          </Text>
          <ChakraInput
            type="text"
            value={formData.eventName}
            onChange={(e) => handleInputChange("eventName", e.target.value)}
            w="100%"
            h="48px"
            px={4}
            borderRadius="8px"
            border="1px solid #E0E0E0"
            bg="#FFFFFF"
            fontFamily="Poppins"
            fontSize="15px"
            fontWeight={300}
            color="#000000"
            _focus={{
              outline: "none",
              borderColor: "#49BBBD",
            }}
          />
        </Box>

        <Box>
          <Text fontFamily="Poppins" fontSize="16px" fontWeight={400} color="#000000" mb={2}>
            Start date / Time
          </Text>
          <ChakraInput
            type="text"
            value={formData.startDate}
            onChange={(e) => handleInputChange("startDate", e.target.value)}
            w="100%"
            h="48px"
            px={4}
            borderRadius="8px"
            border="1px solid #E0E0E0"
            bg="#FFFFFF"
            fontFamily="Poppins"
            fontSize="15px"
            fontWeight={300}
            color="#000000"
            _focus={{
              outline: "none",
              borderColor: "#49BBBD",
            }}
          />
        </Box>

        <Box>
          <Text fontFamily="Poppins" fontSize="16px" fontWeight={400} color="#000000" mb={2}>
            End Date / Time
          </Text>
          <ChakraInput
            type="text"
            value={formData.endDate}
            onChange={(e) => handleInputChange("endDate", e.target.value)}
            w="100%"
            h="48px"
            px={4}
            borderRadius="8px"
            border="1px solid #E0E0E0"
            bg="#FFFFFF"
            fontFamily="Poppins"
            fontSize="15px"
            fontWeight={300}
            color="#000000"
            _focus={{
              outline: "none",
              borderColor: "#49BBBD",
            }}
          />
        </Box>

        <Box>
          <Text fontFamily="Poppins" fontSize="16px" fontWeight={400} color="#000000" mb={2}>
            Location
          </Text>
          <ChakraInput
            type="text"
            value={formData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            w="100%"
            h="48px"
            px={4}
            borderRadius="8px"
            border="1px solid #E0E0E0"
            bg="#FFFFFF"
            fontFamily="Poppins"
            fontSize="15px"
            fontWeight={300}
            color="#000000"
            _focus={{
              outline: "none",
              borderColor: "#49BBBD",
            }}
          />
        </Box>

        <Box>
          <Text fontFamily="Poppins" fontSize="16px" fontWeight={400} color="#000000" mb={2}>
            Notification
          </Text>
          <Box position="relative">
            <select
              value={formData.notification}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleInputChange("notification", e.target.value)
              }
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "8px",
                border: "1px solid #E0E0E0",
                background: "#FFFFFF",
                fontFamily: "Poppins",
                fontSize: "15px",
                fontWeight: 300,
                color: "#000000",
                padding: "0 12px",
                appearance: "none",
              }}
            >
              <option value="30 mins">30 mins</option>
              <option value="1 hour">1 hour</option>
              <option value="2 hours">2 hours</option>
              <option value="1 day">1 day</option>
            </select>
          </Box>
        </Box>

        <Box>
          <Text fontFamily="Poppins" fontSize="16px" fontWeight={400} color="#000000" mb={2}>
            Email
          </Text>
          <ChakraInput
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            w="100%"
            h="48px"
            px={4}
            borderRadius="8px"
            border="1px solid #E0E0E0"
            bg="#FFFFFF"
            fontFamily="Poppins"
            fontSize="15px"
            fontWeight={300}
            color="#000000"
            _focus={{
              outline: "none",
              borderColor: "#49BBBD",
            }}
          />
        </Box>

        <Box>
          <Text fontFamily="Poppins" fontSize="16px" fontWeight={400} color="#000000" mb={2}>
            Event Description
          </Text>
          <Textarea
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            w="100%"
            minH="120px"
            px={4}
            py={3}
            borderRadius="8px"
            border="1px solid #E0E0E0"
            bg="#FFFFFF"
            fontFamily="Poppins"
            fontSize="15px"
            fontWeight={300}
            color="#000000"
            resize="vertical"
            _focus={{
              outline: "none",
              borderColor: "#49BBBD",
            }}
          />
        </Box>

        <Box display="flex" justifyContent="flex-end" mt={4}>
          <PrimaryButton onClick={handleSave} w="140px" h="48px" fontSize="16px">
            Save Now
          </PrimaryButton>
        </Box>
      </VStack>
    </Box>
  );
};

export default CourseLessonForm;
