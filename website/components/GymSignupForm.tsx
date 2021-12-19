import { Box, Button, Flex, Heading, Input, Text } from "@theme-ui/components";
import axios from "axios";
import { NextPage } from "next";
import { useState } from "react";
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
  const [showForm, setShowForm] = useState(false);

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

  const [status, setStatus] = useState<"unsubmitted" | "error" | "success">(
    "unsubmitted"
  );

  return (
    <>
      <Box
        mb={75}
        backgroundColor="secondary"
        p={5}
        m={-5}
        sx={{
          borderRadius: "4px",
          boxShadow: "0px 3px 3px -2px rgba(100,100,100, .5)",
        }}
      >
        {!showForm && (
          <>
            <p>
              If you don&apos;t want your gym to miss out then hit the button 👇
              to leave your email. If you have any questions you can also reach
              us at&nbsp;
              <b>more.walls.nl@gmail.com</b>.
            </p>
            <Button
              variant="primary"
              sx={{ margin: "auto", display: "block" }}
              onClick={() => setShowForm(true)}
            >
              Get involved
            </Button>
          </>
        )}

        {showForm && (
          <>
            <h4>Great that you&apos;re interested!</h4>
            <p>
              It&apos;s still early days, but we&apos;ll keep you updated on our
              progress!
            </p>
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
                <label>Gym name*</label>
                <Input {...register("gymName", { required: true })} />
                <label>Email*</label>
                <Input
                  type="email"
                  {...register("email", { required: true })}
                />
                <label>Telephone</label>
                <Input {...register("telephone")} />
                <Text sx={{ fontSize: 2 }}>* = required</Text>
                <Button
                  my={3}
                  type="submit"
                  sx={{ width: "100%", cursor: "pointer" }}
                >
                  Submit
                </Button>
              </form>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default Gyms;
