import React, { useEffect, useState } from "react";
import Card from "./Card";
import {
  Box,
  Flex,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useAppSelector } from "../../hooks/hook";
import { useStudentAssignments } from "../../hooks/hook";
import { log } from "console";
import { useNavigate } from "react-router-dom";
import TableRow from "./TableRow";

type Props = {};

function Assignments(props: Props) {
  let assignments = [1, 2, 3, 4, 5, 6];
  const { student } = useAppSelector((state) => state.student);
  const { studentAssignments } = useAppSelector((state) => state.assignments);
  useStudentAssignments(student._id);

  console.log(studentAssignments);

  return (
    <div>
      <Box mt={10}>
        <Text fontSize={"3xl"}>Html & Css</Text>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Imperial to metric conversion factors</TableCaption>{" "}
            <Thead>
              <Tr>
                <Th>Topic</Th>
                <Th>Week</Th>
                <Th>Date</Th>
                <Th>Approved</Th>
              </Tr>
            </Thead>
            <Tbody>
              {studentAssignments.map((item) => {
                console.log(item);

                return <TableRow item={item} />;
              })}
            </Tbody>
          </Table>
        </TableContainer>
        {/* </Box>
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
        </Box> */}
      </Box>
    </div>
  );
}

export default Assignments;
