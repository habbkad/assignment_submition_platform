import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
interface Props {}

const User_details = (props: Props) => {
  const { student }: any = useAppSelector((state) => state.student);

  return (
    <div>
      <Box>
        <Box>
          <Text fontSize={"2xl"}>Personal</Text>
        </Box>
        <Box>
          <Flex mt={[10]}>
            <Text w={["30%"]}>Phone</Text>
            <Text w={["30%"]}>{student.phone}</Text>
            <Text w={["50%"]}> edit</Text>
          </Flex>
          <Flex mt={[10]}>
            <Text w={["30%"]}>Index Number</Text>
            <Text w={["30%"]}>{student.indexNumber}</Text>
          </Flex>
          <Flex mt={[10]}>
            <Text w={["30%"]}>Gen</Text>
            <Text w={["30%"]}>{student.gen}</Text>
          </Flex>
          <Flex mt={[10]}>
            <Text w={["30%"]}>Email</Text>
            <Text w={["30%"]}>{student.email}</Text>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default User_details;
