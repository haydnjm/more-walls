import React from "react";
import { Flex, Box, Heading } from "@theme-ui/components";
import Link from "next/link";

interface GymLinkProps {}

const GymLink: React.FC<GymLinkProps> = () => {
  return (
    <Box>
      <Heading as="h2">Do you own/work for a gym?</Heading>
      <Link href="/gyms">Information for gyms</Link>
    </Box>
  );
};

export default GymLink;
