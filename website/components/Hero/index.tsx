import React from "react";
import { Box, Flex, Heading } from "@theme-ui/components";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Flex
      sx={{
        height: "60vh",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box>
        <Heading as="h1" sx={{ fontSize: 100, fontWeight: 300, m: 20 }}>
          MoreWalls
        </Heading>
        <Heading as="h1" sx={{ fontSize: 20 }}>
          The flexible way to climb.
        </Heading>
        <Heading as="h3" sx={{ fontSize: 15 }}>
          (coming soon)
        </Heading>
      </Box>
    </Flex>
  );
};

export default Hero;
