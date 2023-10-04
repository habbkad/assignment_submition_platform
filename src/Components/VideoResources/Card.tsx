import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  name: string;
  submitted: boolean;
}

export default function blogPostWithImage(props: Props) {
  return (
    <Box
      maxW={"300px"}
      w={"full"}
      // bg={("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
    >
      <Box
        h={"50px"}
        bg={"gray.100"}
        mt={-6}
        mx={-6}
        mb={6}
        pos={"relative"}
      ></Box>
      <Stack>
        <Text
          color={"green.500"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          Assignment
        </Text>
        <Heading
          // color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {props.name}
        </Heading>
        <Text color={"gray.500"}>ll</Text>
      </Stack>
      <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          {props.submitted ? (
            <Text fontWeight={600}> submitted.</Text>
          ) : (
            <Text fontWeight={600}>Not submitted.</Text>
          )}

          <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
        </Stack>
      </Stack>
    </Box>
  );
}
