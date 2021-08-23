import { Box, Button, Flex, Heading, Input, Text } from "@theme-ui/components";
import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type GymsProps = { error?: string };

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  gymName: string;
};

const Gyms: NextPage<GymsProps> = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .post("/api/add-email-member-gym", data)
      .then(() => setStatus("success"))
      .catch((e) => {
        setStatus("error");
        console.error(e);
      });
  };

  const [status, setStatus] =
    useState<"unsubmitted" | "error" | "success">("unsubmitted");

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

      <Heading>
        For more information on how you can get involved in the project then
        please fill the following form in:
      </Heading>

      {status === "error" ? (
        <Box>
          <Heading as="h4">Something went wrong :(</Heading>
        </Box>
      ) : status === "success" ? (
        <Box>
          <Heading as="h4" color="accent">
            Great! We&apos;ll send you an email to let you know some more
            details!
          </Heading>
        </Box>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex mx={-1}>
            <Box sx={{ flex: "1 1 0" }} mx={1}>
              <label>First name*</label>
              <Input {...register("firstName", { required: true })} />
            </Box>
            <Box sx={{ flex: "1 1 0" }} mx={1}>
              <label>Last name*</label>
              <Input {...register("lastName", { required: true })} />
            </Box>
          </Flex>
          <label>Gym name*</label>
          <Input {...register("gymName", { required: true })} />
          <label>Email*</label>
          <Input type="email" {...register("email", { required: true })} />
          <label>Telephone</label>
          <Input {...register("telephone")} />
          <Text sx={{ fontSize: 2 }}>* = required</Text>
          <Button my={3} type="submit" sx={{ width: "100%" }}>
            Submit
          </Button>
        </form>
      )}
    </>
  );
};

export default Gyms;
