import { Box, Flex, Heading, Text } from "@theme-ui/components";
import { NextPage } from "next";
import Link from "next/link";

type GymsProps = { error?: string };

const Gyms: NextPage<GymsProps> = () => {
  return (
    <>
      <Link href="/">Back to home</Link>
      <Flex
        sx={{
          height: "40vh",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Heading as="h1" sx={{ fontSize: 50 }}>
          For the gyms:
        </Heading>
      </Flex>
      <Box my={6}>
        <Heading mb={6}>What&apos;s the point?</Heading>
        <Text>
          The first goal of More Walls is to encourage climbers to climb more
          often. By making gyms more accessible and rewarding climbers for
          climbing more frequently, we want to take climbing and bouldering to
          the next level. This means fuller gyms and a bigger customer base for
          everyone.
        </Text>
      </Box>
      <Box my={6}>
        <Box>
          Bouldering and climbing are becoming more and more popular, and we
          expect that to continue considering how popular they were in the Tokyo
          Olympics!
        </Box>
        <br />
        <Box>
          We are working on an algorithm that rewards climbers for:
          <ul>
            <li>Climbing more frequently</li>
            <li>Climbing at a variety of places</li>
          </ul>
          As a gym you might ask:{" "}
          <i>&quot;Why would I want to share my customers?&quot;</i> - a valid
          question!
        </Box>
        <br />
        <Box>
          We believe that if we give climbers the opportunity to climb at a
          range of locations in a cost effective (and incentivised) way, the
          amount of visits to the gym per customer will increase.
        </Box>
        <br />
        <Box>
          This means that although you will be sharing your customers, you will
          have access to a larger customer base, and each customer will be
          climbing more often.
        </Box>
      </Box>
    </>
  );
};

export default Gyms;
