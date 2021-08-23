import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Text,
} from "@theme-ui/components";
import axios from "axios";
import React, { useCallback, useState } from "react";

interface PropositionProps {}

const Proposition: React.FC<PropositionProps> = () => {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] =
    useState<"unsubmitted" | "error" | "success">("unsubmitted");

  const submitForm = useCallback(() => {
    axios
      .post("/api/add-email-member-climber", { email })
      .then(() => setStatus("success"))
      .catch((e) => {
        setStatus("error");
        console.error(e);
      });
  }, [email]);

  return (
    <Box sx={{ mb: 100 }}>
      <Heading as="h1" mb={3}>
        What are we going to do about it?
      </Heading>
      <Text as="p" my={3}>
        MoreWalls is a service that encourages climbers to climb. By{" "}
        <b>climbing more frequently</b> and at a <b>variety of locations</b>,
        climbers can get entry at discounted prices.
      </Text>
      <Text as="p" my={3}>
        By getting more people into the gym more frequently, we can lower the
        entry costs (and have lots more fun climbing 😉). Climbers get to climb
        for cheaper and gyms keep their walls full - so everybody wins!
      </Text>
      <Box>
        <Button
          onClick={() => setShowInput(!showInput)}
          sx={{ cursor: "pointer" }}
        >
          That sounds amazing - keep me updated please!
        </Button>
      </Box>
      {showInput && (
        <Box my={5}>
          <Box>
            Enter your email address here to recieve an update in the future
            when we reach the next stage of the project! (No spam, promise 👍)
          </Box>
          {status === "error" ? (
            <Box>
              <Heading as="h4">Something went wrong :(</Heading>
            </Box>
          ) : status === "success" ? (
            <Box>
              <Heading as="h4" color="accent">
                Woo! We&apos;ll send you a message when we&apos;ve made some
                progress!
              </Heading>
            </Box>
          ) : (
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
                  <Button type="submit" sx={{ cursor: "pointer" }}>
                    Submit
                  </Button>
                </Box>
              </Flex>
            </form>
          )}
        </Box>
      )}
      <Flex
        sx={{ flexDirection: "column", width: "100%", alignItems: "center" }}
      >
        <Flex sx={{ alignItems: "center", width: "100%", my: 4 }}>
          <Box
            sx={{
              m: 1,
              flex: "1 1 0",
              border: "1px solid",
              borderColor: "primary",
              height: "1px",
            }}
          ></Box>
          <Box> or if you are a gym owner:</Box>
          <Box
            sx={{
              m: 1,
              flex: "1 1 0",
              border: "1px solid",
              borderColor: "primary",
              height: "1px",
            }}
          ></Box>
        </Flex>
        <Link href="/gyms">
          <Button sx={{ cursor: "pointer" }}>Information for gyms</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Proposition;
