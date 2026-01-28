import React, { useState } from "react";
import { VStack, Box } from "@chakra-ui/react";
import { PrimaryButton, Input } from "../atoms";
import { useBreakpointValue } from "@chakra-ui/react";

const RegisterCard: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const inputWidth = useBreakpointValue({ base: "317.15px", md: "435px" });
  const inputHeight = useBreakpointValue({ base: "54px", md: "45px" });


  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = () => {
    console.log("Register:", formData);
  };

  return (
    <VStack align="stretch" w="auto" maxW="auto" mx="auto">

      <VStack gap="20px" align="stretch">
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your Email Address"
          w={inputWidth}
          h={inputHeight}
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
        />

        <Input
          label="Username"
          type="text"
          placeholder="Enter your Username"
          value={username}
          w={inputWidth}
          h={inputHeight}
          onChange={setUsername}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your Password"
          value={password}
          w={inputWidth}
          h={inputHeight}
          onChange={setPassword}
          showPasswordToggle
        />
      </VStack>

      <Box display="flex" justifyContent="flex-end">
        <PrimaryButton
          onClick={handleRegister}
          w="232px"
          h="49px"
          fontSize="16px"
          borderRadius="36px"
          style={{ paddingLeft: "48px", paddingRight: "48px" }}
        >
          Register
        </PrimaryButton>
      </Box>
    </VStack>
  );
};

export default RegisterCard;
