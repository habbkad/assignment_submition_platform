import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const User_details = (props: Props) => {
  return (
    <div>
      <Box>
        <Box backgroundColor={"gray.50"}>
          <Text fontSize={"2xl"}>Personal</Text>
        </Box>
        <Box>
          <Flex mt={[10]}>
            <Text w={["30%"]}>Phone</Text>
            <Text w={["30%"]}>02020303040</Text>
            <Text w={["50%"]}> edit</Text>
          </Flex>
          <Flex mt={[10]}>
            <Text w={["30%"]}>Index Number</Text>
            <Text w={["30%"]}>02020303040</Text>
            <Text w={["50%"]}> edit</Text>
          </Flex>
          <Flex mt={[10]}>
            <Text w={["30%"]}>Gen</Text>
            <Text w={["30%"]}>02020303040</Text>
            <Text w={["50%"]}> edit</Text>
          </Flex>
          <Flex mt={[10]}>
            <Text w={["30%"]}>Email</Text>
            <Text w={["30%"]}>02020303040</Text>
            <Text w={["50%"]}> edit</Text>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default User_details;
