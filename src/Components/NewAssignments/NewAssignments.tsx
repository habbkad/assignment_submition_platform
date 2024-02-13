import {
  Box,
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useAppSelector, useUnapprovedAssignments } from "../../hooks/hook";
import { type } from "os";
import { log } from "console";
import AssignmentItem from "./AssignmentItem";

type Props = {};

const NewAssignments = (props: Props) => {
  const data = useAppSelector(
    (state) => state.assignments.unapprovedAssignments
  );

  console.log(data);

  return (
    <Box>
      <Box></Box>
      <Box>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Gen</Th>
                <Th>Name</Th>
                <Th>Date</Th>
                <Th>Options</Th>
              </Tr>
            </Thead>

            <Tbody>
              {data.map((item) => {
                return <AssignmentItem item={item} />;
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default NewAssignments;
