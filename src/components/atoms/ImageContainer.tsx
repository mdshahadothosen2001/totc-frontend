import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

type ImageContainerProps = {
  src: string;
  heading?: string;
  subtext?: string;
  w?: string | number;
  h?: string | number;
  borderRadius?: string | number;
  isRound?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
};

const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  heading,
  subtext,
  w = "100%",
  h = "100%",
  borderRadius = "0",
  isRound = false,
  objectFit = "cover",
  objectPosition = "center center",
}) => {
  return (
    <Box
      position="relative"
      w={w}
      h={h}
      overflow="hidden"
      borderRadius={isRound ? "50%" : borderRadius}
    >
      <Image
        src={src}
        alt={heading || "auth image"}
        w="100%"
        h="100%"
        objectFit={objectFit}
        objectPosition={objectPosition}
      />

      {(heading || subtext) && (
        <Box position="absolute" bottom="40px" left="40px" right="40px">
          {heading && (
            <Text
              color="white"
              fontSize="32px"
              fontWeight="700"
              mb="8px"
              textShadow="0 2px 8px rgba(0,0,0,0.3)"
            >
              {heading}
            </Text>
          )}
          {subtext && (
            <Text color="white" fontSize="16px" textShadow="0 2px 8px rgba(0,0,0,0.3)">
              {subtext}
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ImageContainer;
