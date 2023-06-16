import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

type Props = {};

function User_profile({}: Props) {
  return (
    <div>
      <Box backgroundColor={"gray.50"}>
        <Text fontSize={"2xl"}>Student Details</Text>
      </Box>
      <Flex
        direction={["column", "row"]}
        justify={["center", "normal"]}
        w={"100%"}
      >
        <Box mt={[5]} width={["100%", "35%"]}>
          <Image
            borderRadius="full"
            boxSize="170px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
        <Box width={["100%", "30%"]} mt={[5]}>
          <Text fontSize={"3xl"}>Name</Text>
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
