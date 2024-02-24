import { Td, Tr } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { approveAssignment, useAppSelector } from "../../hooks/hook";

type Props = {};

const TableRow = ({ item }: any) => {
  let { assignmentDetails } = useAppSelector((state) => state.assignments);
  //console.log("((((((((", assignmentDetails);
  const navigate = useNavigate();
  const handleApproval = () => {
    let newObj = { ...assignmentDetails };
    newObj.approved = true;

    approveAssignment(newObj);
  };
  return (
    <Tr
      onClick={(e) => {
        navigate(`${item._id}`);
      }}
    >
      <Td>{item.topic}</Td>
      <Td>{item.week}</Td>
      <Td>{item.date.split("/")[0]}</Td>
      <Td>{item.approved ? "True" : "False"}</Td>
    </Tr>
  );
};

export default TableRow;
