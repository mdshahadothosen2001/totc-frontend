import React, { useState } from "react";
import { VStack, Text, HStack, Box } from "@chakra-ui/react";
import { PrimaryButton, Input } from "../atoms";
import { useBreakpointValue } from "@chakra-ui/react";

const LoginCard: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const inputWidth = useBreakpointValue({ base: "317.15px", md: "435px" });
  const inputHeight = useBreakpointValue({ base: "54px", md: "45px" });

  const handleLogin = () => {
    console.log("Login:", { username, password, rememberMe });
  };

  return (
    <VStack align="stretch" w="auto" maxW="auto" mx="auto">

      <VStack gap="20px" align="stretch">
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

      <HStack justify="space-between" align="center" fontSize="14px">
        <Box display="flex" alignItems="center" gap="8px">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            style={{ width: "16px", height: "16px", accentColor: "#49BBBD", cursor: "pointer" }}
          />
          <Text color="#000000" fontSize="12px" fontWeight="300px">
            Remember me
          </Text>
        </Box>
        <Text
          color="#000000"
          fontSize="12px"
          fontWeight="300px"
          cursor="pointer"
          _hover={{ color: "#49BBBD" }}
        >
          Forgot Password ?
        </Text>
      </HStack>

      <Box display="flex" justifyContent="flex-end" fontWeight="400" lineHeight="24px">
        <PrimaryButton
          onClick={handleLogin}
          w="232px"
          h="49px"
          fontSize="16px"
          borderRadius="36px"
          style={{ paddingLeft: "48px", paddingRight: "48px" }}
        >
          Login
        </PrimaryButton>
      </Box>
    </VStack>
  );
};

export default LoginCard;
