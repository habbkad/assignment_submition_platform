import {
  Box,
  Flex,
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
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { ChildProcess } from "child_process";

type Props = {};

function WeeklyContent({}: Props) {
  const location = useLocation();
  console.log(location.state);
  const playerRef = useRef(null);
  const [src, setSrc] = useState("https://www.youtube.com/watch?v=yhB3BgJyGl8");

  return (
    <div>
      <Box h={["80vh"]}>
        <Flex
          justify={"center"}
          direction={["column", "row"]}
          align={"center"}
          h={"100%"}
        >
          <Box width={["100%", "50%"]}>
            <ReactPlayer
              ref={playerRef}
              url={src}
              controls={true}
              width={"100%"}
            />
          </Box>
          <Box width={["100%", "50%"]} p={[2, 10]}>
            <TableContainer
              borderWidth={[2]}
              borderColor={"black"}
              borderRadius={[5]}
              h={350}
            >
              <Table variant="striped">
                <TableCaption>Videos on week</TableCaption>
                <Thead>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {location.state.map((item: any, index: number) => {
                    return (
                      <TableRow item={item} setSrcs={setSrc} index={index} />
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

interface ChildProps {
  item: any;
  setSrcs: (str: string) => void;
  index: number; // try not to use any.
}

const TableRow: React.FC<ChildProps> = ({ item, setSrcs, index }) => {
  return (
    <Tr
      onClick={() => {
        setSrcs(item.resourceLink);
      }}
    >
      <Td>{index}</Td>
      <Td>{item.title}</Td>
      <Td isNumeric>25.4</Td>
    </Tr>
  );
};

export default WeeklyContent;
