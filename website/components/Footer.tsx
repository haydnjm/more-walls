import React from "react";
import { Flex, Box, Text } from "@theme-ui/components";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Flex p={50} backgroundColor="secondary" mt={50} color="lights.five">
      <Box sx={{ flex: "1 1 auto" }}>
        <p>more.walls.nl@gmail.com</p>

        <Text sx={{ fontSize: "0.7rem" }}>
          <a
            href="https://haydnjm.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            haydnjm.com
          </a>
        </Text>
      </Box>
      <Box sx={{ flex: "1 1 auto" }}></Box>
    </Flex>
  );
};

export default Footer;
