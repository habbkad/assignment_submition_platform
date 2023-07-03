import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import User_details from "./User_details";
import Assignment_Details from "./Assignment_Details";
import User_profile from "./User_profile";
import { useStudent } from "../../hooks/hook";
import { useAppSelector, useAppDispatch } from "../../hooks/hook";

interface Props {}

const Home = (props: Props) => {
  const { user }: any = useAppSelector((state) => state.user);

  useStudent(user.id);
  console.log(user);

  return (
    <div>
      <Box>
        <User_profile />
      </Box>{" "}
      <Box mt={["10%", "5%"]}>
        <User_details />{" "}
      </Box>
      <Box mt={["10%", "5%"]}>
        <Assignment_Details />
      </Box>
    </div>
  );
};

export default Home;
