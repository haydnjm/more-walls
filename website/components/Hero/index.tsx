import React from "react";
import { Box, Flex, Heading } from "@theme-ui/components";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Flex
      sx={{
        height: "70vh",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box>
        <Heading as="h1" sx={{ fontSize: 50 }}>
          More Walls
        </Heading>
        <Heading as="h1" sx={{ fontSize: 30 }}>
          (coming soon)
        </Heading>
      </Box>
    </Flex>
  );
};

export default Hero;
