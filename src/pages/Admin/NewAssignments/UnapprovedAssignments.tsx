import React from "react";
import NewAssignments from "../../../Components/NewAssignments/NewAssignments";
import { Box } from "@chakra-ui/react";
import { useUnapprovedAssignments } from "../../../hooks/hook";

type Props = {};

const UnapprovedAssignments = (props: Props) => {
  useUnapprovedAssignments();
  return (
    <Box>
      <NewAssignments />
    </Box>
  );
};

export default UnapprovedAssignments;
