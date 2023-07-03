import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../hooks/hook";
import { useStudentAssignments } from "../../hooks/hook";
import { log } from "console";
import { useNavigate } from "react-router-dom";

type Props = {};

function Assignments(props: Props) {
  const navigate = useNavigate();

  let assignments = [1, 2, 3, 4, 5, 6];
  const { student } = useAppSelector((state) => state.student);
  const { studentAssignments } = useAppSelector((state) => state.assignments);
  useStudentAssignments(student._id);

  console.log(studentAssignments);

  return (
    <div>
      <Box>
        <Box mt={10}>
          <Text fontSize={"3xl"}>Html & Css</Text>
          <SimpleGrid columns={[1, 2, 4]} spacing={10} mt={4}>
            {studentAssignments.map((item) => {
              if (item.topic == "Html & Css") {
                return (
                  <Box
                    onClick={(e) => {
                      navigate(`${item._id}`);
                    }}
                  >
                    <Card name="Html & Css" submitted={true} />
                  </Box>
                );
              }
            })}
          </SimpleGrid>
        </Box>
        <Box mt={10}>
          <Text fontSize={"3xl"}>Responsive Design ( Bootstrap) </Text>
          <SimpleGrid columns={[1, 2, 4]} spacing={10} mt={4}>
            {studentAssignments.map((item) => {
              if (item.topic == "Responsive (Bootstrap)") {
                return (
                  <Box
                    onClick={(e) => {
                      navigate(`${item._id}`);
                    }}
                  >
                    <Card
                      name="Responsive Design ( Bootstrap)"
                      submitted={true}
                    />
                  </Box>
                );
              }
            })}
          </SimpleGrid>
        </Box>
        <Box mt={10}>
          <Text fontSize={"3xl"}>Version control (Git) </Text>
          <SimpleGrid columns={[1, 2, 4]} spacing={10} mt={4}>
            {studentAssignments.map((item) => {
              if (item.topic == "Version Control") {
                return (
                  <Box
                    onClick={(e) => {
                      navigate(`${item._id}`);
                    }}
                  >
                    <Card name="Version control (Git)" submitted={true} />
                  </Box>
                );
              }
            })}
          </SimpleGrid>
        </Box>
        <Box mt={10}>
          <Text fontSize={"3xl"}>JavaScript </Text>
          <SimpleGrid columns={[1, 2, 4]} spacing={10} mt={4}>
            {studentAssignments.map((item) => {
              if (item.topic == "JavaScript") {
                return (
                  <Box
                    onClick={(e) => {
                      navigate(`${item._id}`);
                    }}
                  >
                    <Card name="JavaScript" submitted={true} />
                  </Box>
                );
              }
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
}

export default Assignments;
