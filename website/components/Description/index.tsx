import React from "react";
import { Box, Flex, Heading, Text } from "@theme-ui/components";
import Link from "next/link";

interface DescriptionProps {}

const SmallHeading: React.FC = ({ children }) => (
  <Heading as="h3" sx={{ fontWeight: "700" }}>
    {children}
  </Heading>
);
const Description: React.FC<DescriptionProps> = () => {
  return (
    <Box mb={75}>
      <Box my={3}>
        <Text>
          It&apos;s a great time to be a climber in Amsterdam. We have an
          amazing selection of cool gyms all over the city where you can have a
          climb, meet awesome people and grab a beer 🍻
        </Text>
      </Box>
      <Link href="/gyms">
        Are you a gym owner? View information for gyms ➡️
      </Link>
      <Box my={3}>
        <Text>
          While we&apos;re super lucky to have access to all of this great
          climbing and bouldering, I keep getting the feeling that we&apos;re
          not getting the most out of what Amsterdam&apos;s bouldering and
          climbing scene has to offer:
        </Text>
      </Box>

      <Box my={6}>
        <Box my={2}>
          <SmallHeading>🧗 ADVENTURE</SmallHeading>
        </Box>
        <Box>
          <Text as="p">
            Like skiing, mountain biking, or hiking a big part of the fun of
            climbing is attempting new routes that you&apos;ve never tried
            before. While the gyms do a great job resetting routes quite
            regularly, if you are going to the same gym 3 times per week
            it&apos;s likely you&apos;ll finish all the routes at your level
            before it&apos;s resetting time.
          </Text>
        </Box>
      </Box>
      <Box my={6}>
        <Box my={2}>
          <SmallHeading>👥 CLIMBING TOGETHER</SmallHeading>
        </Box>
        <Box>
          <Text>
            It&apos;s nice to go with climbing with friends - but if one friend
            has a subscription to one gym and another to different gym it can be
            tough to climb all together. At least one person is paying for a
            membership and then they need to pay full price for a single entry
            to a different gym so that they can climb with everyone else.
          </Text>
        </Box>
      </Box>
      <Box my={6}>
        <Box my={2}>
          <SmallHeading>🤑 PRICE</SmallHeading>
        </Box>
        <Box>
          <Text>
            It&apos;s always possible to just keep buying single entries or
            stripcards so that you can stay flexible, but this can get pretty
            expensive if you are climbing regularly! If you&apos;re climbing 2-3
            times per week it can easily add up to more than €100 per month,
            which sucks considering that a monthly subscription fee to a gym is
            around €50.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Description;
