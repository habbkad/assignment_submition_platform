import React from "react";
import NewAssignments from "../../../Components/NewAssignments/NewAssignments";
import { Box } from "@chakra-ui/react";

type Props = {};

const UnapprovedAssignments = (props: Props) => {
  return (
    <Box>
      <NewAssignments />
    </Box>
  );
};

export default UnapprovedAssignments;
