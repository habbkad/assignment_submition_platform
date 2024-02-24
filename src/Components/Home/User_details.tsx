import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
interface Props {}

const User_details = (props: Props) => {
  const { student }: any = useAppSelector((state) => state.student);

  return (
    <Box>
      <Box>
        <Text fontSize={"2xl"}>Personal Details</Text>
      </Box>
      <Box>
        <Flex mt={[6]} justify={["space-between"]}>
          <Text w={["30%"]}>Name</Text>
          <Text>{`${student.firstName} ${student.middleName} ${student.lastName}`}</Text>
        </Flex>

        <Flex mt={[6]} justify={["space-between"]}>
          <Text w={["30%"]}>Phone</Text>
          <Text>{student.phone}</Text>
        </Flex>
        <Flex mt={[6]} justify={["space-between"]}>
          <Text w={["30%"]}>Index Number</Text>
          <Text>{student.indexNumber}</Text>
        </Flex>
        <Flex mt={[6]} justify={["space-between"]}>
          <Text w={["30%"]}>Gen</Text>
          <Text>{student.gen}</Text>
        </Flex>
        <Flex mt={[6]} justify={["space-between"]}>
          <Text w={["30%"]}>Email</Text>
          <Text>{student.email}</Text>
        </Flex>
        <Flex mt={[6]} justify={["space-between"]}>
          <Text w={["30%"]}>Birthday</Text>
          <Text>{student.email}</Text>
        </Flex>
        <Flex mt={[6]} justify={["space-between"]}>
          <Text w={["30%"]}>Gender</Text>
          <Text>{student.email}</Text>
        </Flex>
        <Flex mt={[6]} justify={["space-between"]}>
          <Text w={["30%"]}>Gender Email</Text>
          <Text>{student.email}</Text>
        </Flex>
        <Flex mt={[6]} justify={["space-between"]}>
          <Text w={["30%"]}>Year</Text>
          <Text>{student.email}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default User_details;
