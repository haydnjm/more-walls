import { Box, Button, Flex, Heading, Input, Text } from "@theme-ui/components";
import React, { useCallback, useState } from "react";

interface PropositionProps {}

const Proposition: React.FC<PropositionProps> = () => {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");

  const submitForm = useCallback(() => {}, [email]);

  return (
    <Box sx={{ mb: 150 }}>
      <Heading as="h1" mb={3}>
        What are we going to do about it?
      </Heading>
      <Text as="p" my={3}>
        More Walls is a service that encourages climbers to climb. By{" "}
        <b>climbing more frequently</b> and at a <b>variety of locations</b>,
        climbers can get entry at discounted prices.
      </Text>
      <Text as="p" my={3}>
        By getting more people into the gym, nore frequently, we can lower the
        entry costs (and have lots more fun climbing 😉). Climbers get to climb
        for cheaper and gyms keep their walls full - so everybody wins!
      </Text>
      <Box>
        <Button onClick={() => setShowInput(!showInput)}>
          That sounds amazing - keep me updated please!
        </Button>
      </Box>
      {showInput && (
        <Box my={5}>
          <Box>
            Enter your email address here to recieve an update in the future
            when we reach the next stage of the project! (No spam, promise 👍)
          </Box>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            <Flex m={-1}>
              <Box sx={{ flex: "1 1 0" }} p={1}>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box p={1}>
                <Button type="submit">Submit</Button>
              </Box>
            </Flex>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default Proposition;
