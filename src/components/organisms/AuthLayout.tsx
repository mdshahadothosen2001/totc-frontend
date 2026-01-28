import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ImageContainer from "../atoms/ImageContainer";
import Card from "../atoms/Card";
import type { AuthTab, AuthLayoutProps } from "../../types/auth.type";
import { TabToggle } from "../molecules";

const AuthLayout: React.FC<AuthLayoutProps> = ({
  imageSrc,
  imageHeading,
  imageSubtext,
  contentHeading,
  contentSubtext,
  tabOptions,
  activeValue,
  onChange,
  children,
}) => {
  return (
    <Box
      w="100%"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#F8F8F8"
    >
      {/* ================= MOBILE ================= */}
      <Box display={{ base: "block", md: "none" }}>
        <Card
          width={375}
          height={876}
          bgColor="#FFFEFC"
          borderRadius={24}
          style={{ padding: "32px 24px", boxSizing: "border-box" }}
        >
          <Box w="100%" mb="20px" textAlign="center">
            {contentHeading && (
              <Text fontSize="16px" lineHeight="24px" fontWeight="400" color="#000000">
                {contentHeading}
              </Text>
            )}

            <Box mt="16px" display="flex" justifyContent="center">
              <TabToggle
                options={tabOptions}
                activeValue={activeValue}
                onChange={(v) => onChange(v as AuthTab)}
              />
            </Box>

            {contentSubtext && (
              <Text fontSize="16px" color="#5B5B5B" lineHeight="24px" mt="16px">
                {contentSubtext}
              </Text>
            )}
          </Box>

          <Box w="100%" overflowY="auto">
            {children}
          </Box>
        </Card>
      </Box>

      {/* ================= DESKTOP / TABLET ================= */}
      <Box
        display={{ base: "none", md: "block" }}
        position="relative"
        w="100%"
        maxW="1440px"
        h="900px"
        bg="#FFFEFC"
        borderRadius="24px"
        boxShadow="0 4px 20px rgba(0,0,0,0.08)"
        overflow="hidden"
      >
        {/* -------- LEFT IMAGE -------- */}
        <Box
          position="absolute"
          left="37.5px"
          top="37.5px"
          w="737px"
          h="825px"
        >
          <ImageContainer
            src={imageSrc}
            heading={imageHeading}
            subtext={imageSubtext}
          />
        </Box>

        {/* -------- RIGHT CONTAINER (FIXED TOP) -------- */}
        <Box
          position="absolute"
          right="37.5px"
          top="113px" // 🔒 FIXED POSITION
          w="454px"
          h={activeValue === "register" ? "674px" : "611px"}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {/* Tab Toggle */}
          <Box w="100%" mb="28px" textAlign="center">
            {contentHeading && (
              <Text fontSize="16px" lineHeight="24px" fontWeight="400" color="#000000">
                {contentHeading}
              </Text>
            )}

            <Box mt={"16px"} display="flex" justifyContent="center">
              <TabToggle
                options={tabOptions}
                activeValue={activeValue}
                onChange={(v) => onChange(v as AuthTab)}
              />
            </Box>

            {contentSubtext && (
              <Text fontSize="16px" color="#5B5B5B" lineHeight="24px" mt="16px">
                {contentSubtext}
              </Text>
            )}
          </Box>

          {/* Form Content */}
          <Box w="100%" flex="1" overflowY="auto">
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
