import React from "react";
import { Box, Flex, Heading, Text, Button } from "theme-ui";
import Link from "next/link";

interface DescriptionProps {
  setShowForm: (p: boolean) => void;
}

const Description: React.FC<DescriptionProps> = ({ setShowForm }) => {
  return (
    <Box>
      <Box mb={75}>
        <h2>What is MoreWalls?</h2>
        <p>
          Our sport is becoming more popular than ever 🎉. Gyms and climbing
          halls are opening all over the country.
        </p>
        <p>
          MoreWalls will be a subscription service that allows climbers to
          boulder and climb to their heart&apos;s content, wherever they find
          themselves.
        </p>
        <p>
          We&apos;re assembling a ClassPass/OneFit style network of locations
          that gives climbers the ability to visit a variety of locations, both
          for rope-climbing AND for bouldering.
        </p>
      </Box>
      <Box mb={75}>
        <h2>Why my gym?</h2>
        <p>
          The whole idea of MoreWalls is to connect climbers with gyms, and each
          other, all over the Netherlands.
        </p>
        <p>
          By paying a small premium the climbers will have the flexibility to
          climb where they want and how they want.
        </p>
        <p>
          This means access to a larger customer base, and to be part of the new
          climbing revolution!
        </p>
        <p>
          In the future we want to add other related activies that climbers love
          (e.g. events, maybe some yoga or climbing-oriented fitness classes)
          but for now, we want to focus on building a network of gyms and
          climbing halls so that climbers have the freedom to mix it up, climb
          wherever they find themselves, and get to know your gym.
        </p>
        <Button
          variant="primary"
          sx={{ margin: "auto", display: "block" }}
          onClick={() => setShowForm(true)}
        >
          Amazing, sign me up right now!
        </Button>
      </Box>
    </Box>
  );
};

export default Description;
