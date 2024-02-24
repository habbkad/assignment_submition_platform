import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hook";
import { useAssignmentDetails } from "../../../hooks/hook";
import { type } from "os";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { approveAssignment } from "../../../hooks/hook";
import { stat } from "fs";
interface Props {}

const AssignmentDetail = (props: Props) => {
  const { tutor } = useAppSelector((state) => state.student);
  const [comment, setComment] = useState({});
  const [message, setMessage] = useState("");
  console.log(tutor);

  let { id } = useParams();
  useAssignmentDetails(id);
  let { assignmentDetails } = useAppSelector((state) => state.assignments);

  const handleApproval = () => {
    let newObj = { ...assignmentDetails, comment: {} };
    newObj.approved = true;
    newObj.comment = comment;

    approveAssignment(newObj);
  };
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
            <Box mt={[20]}>
              <Button
                variant="solid"
                colorScheme="green"
                width={["100%", "70%"]}
                onClick={() => {
                  handleApproval();
                }}
              >
                Approve
              </Button>
              <Button
                variant="solid"
                colorScheme="red"
                width={["100%", "70%"]}
                mt={[5]}
                mb={[5, 0]}
              >
                Reject
              </Button>
            </Box>
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
      </Box>{" "}
      <Box mt={["5%"]}>
        <Text fontSize={[30]}>FeedBack</Text>
        <Textarea
          placeholder="medium size"
          size="resize"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          w={["60%"]}
        />
        <Button
          variant="solid"
          colorScheme="green"
          onClick={() => {
            setComment({
              tutor: `${tutor.firstName} ${tutor.lastName}`,
              comment: message,
            });
          }}
        >
          Done
        </Button>
      </Box>
    </div>
  );
};

export default AssignmentDetail;
