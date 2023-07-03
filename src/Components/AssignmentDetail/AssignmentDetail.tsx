import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hook";
import { useAssignmentDetails } from "../../hooks/hook";
import { type } from "os";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { stat } from "fs";
interface Props {}

const AssignmentDetail = (props: Props) => {
  let { id } = useParams();
  useAssignmentDetails(id);
  const { assignmentDetails } = useAppSelector((state) => state.assignments);
  console.log(assignmentDetails);

  return (
    <div>
      <Box>
        <Flex direction={["column", "row"]}>
          <Box w={["100%", "50%"]}>
            <Text fontSize="5xl">{assignmentDetails.topic}</Text>
            <Flex mt={10}>
              <Text>Title : </Text>
              <Text>{assignmentDetails.title}</Text>
            </Flex>
            <Flex mt={5}>
              <Text>Week : </Text>
              <Text>{assignmentDetails.week}</Text>
            </Flex>
            <Flex mt={5}>
              <Text>Gen : </Text>
              <Text>{assignmentDetails.gen}</Text>
            </Flex>
            <Flex mt={5}>
              <Text>Index number : </Text>
              <Text>{assignmentDetails.indexNumber}</Text>
            </Flex>
            <Flex mt={5}>
              <Text>Git link : </Text>
              <Link>{assignmentDetails.github_link}</Link>
            </Flex>
          </Box>
          <Box w={["100%", "50%"]} justifyContent={"center"}>
            <Image
              src={`http://localhost:5002/uploads/${assignmentDetails.pdfUrl}`}
              objectFit="cover"
              boxSize="500px"
              alt="Dan Abramov"
            />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default AssignmentDetail;
