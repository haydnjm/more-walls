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
        <Heading
          as="h1"
          sx={{ fontSize: [60, 70, 100], fontWeight: 300, my: 20 }}
        >
          MoreWalls
        </Heading>
        <Heading as="h1" sx={{ fontSize: 20 }}>
          The flexible way to climb.
        </Heading>
      </Box>
    </Flex>
  );
};

export default Hero;
