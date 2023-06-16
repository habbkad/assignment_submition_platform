import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import StatsCard from "./StatsCard";
type Props = {};

function Assignment_Dertails({}: Props) {
  return (
    <div>
      <Box>
        <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard
              title={"Total Assignments"}
              stat={"5,000"}
              icon={<BsPerson size={"3em"} />}
            />
            <StatsCard
              title={"Assignments submitted"}
              stat={"1,000"}
              icon={<FiServer size={"3em"} />}
            />
            <StatsCard
              title={"Arrears"}
              stat={"7"}
              icon={<GoLocation size={"3em"} />}
            />
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
}

export default Assignment_Dertails;
