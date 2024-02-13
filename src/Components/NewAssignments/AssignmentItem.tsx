import { Button, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = { item: any };

const AssignmentItem = ({ item }: Props) => {
  const navigate = useNavigate();
  const toDetails = () => {
    navigate(`/assignment/${item._id}`);
  };
  return (
    <Tr>
      <Td>{item.gen}</Td>
      <Td>Name</Td>
      <Td>{item.date}</Td>
      <Td>
        <Button size={"xs"} colorScheme="green">
          Approve
        </Button>
        <Button size={"xs"} colorScheme="gray" ml={4} onClick={toDetails}>
          View
        </Button>
      </Td>
    </Tr>
  );
};

export default AssignmentItem;
