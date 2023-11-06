import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";

type Props = {};

function User_profile({}: Props) {
  const { student }: any = useAppSelector((state) => state.student);
  console.log(student);

  return (
    <div>
      <Box>
        <Text fontSize={"2xl"}>Student Details</Text>
      </Box>
      <Flex
        direction={["column", "row"]}
        justify={["center", "normal"]}
        w={"100%"}
      >
        <Box mt={[5]} width={["100%", "25%"]}>
          <Image
            borderRadius="full"
            boxSize="170px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
        <Box width={["100%", "30%"]} mt={[5]}>
          <Text
            fontSize={"3xl"}
          >{`${student.firstName} ${student.middleName} ${student.lastName}`}</Text>
          <Text>Student</Text>
        </Box>
        <Box alignItems={"flex-end"} mt={[5]}>
          <Text>edit</Text>
        </Box>
      </Flex>
    </div>
  );
}

export default User_profile;
