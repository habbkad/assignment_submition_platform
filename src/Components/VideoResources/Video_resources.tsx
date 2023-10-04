import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Card from "./Card";
import React from "react";
import { useVideos } from "../../hooks/hook";
import { useAppSelector } from "../../hooks/hook";
import { useNavigate } from "react-router-dom";

interface Props {}

const Video_resources = (props: Props) => {
  const { resources } = useAppSelector((state) => state.resources);

  const navigate = useNavigate();
  let html = Object.values(resources.html);

  let css = Object.values(resources.css);
  let responsive = Object.values(resources.responsive);

  useVideos();

  console.log(html);

  return (
    <div>
      <Box>
        <Box mt={10}>
          <Text fontSize={"3xl"}>Html & Css</Text>
          <SimpleGrid columns={[1, 2, 4]} spacing={10} mt={4}>
            {html.map((item) => {
              return (
                <Box>
                  <Box
                    onClick={(e) => {
                      navigate("/weeekly-content", {
                        state: item,
                      });
                    }}
                  >
                    <Card name="Html & Css" submitted={true} />
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
        <Box mt={10}>
          <Text fontSize={"3xl"}>Responsive Design ( Bootstrap) </Text>
          <SimpleGrid columns={[1, 2, 4]} spacing={10} mt={4}>
            {css.map((item) => {
              return (
                <Box>
                  <Box
                    onClick={(e) => {
                      navigate("/weeekly-content", { state: item });
                    }}
                  >
                    <Card name="Html & Css" submitted={true} />
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
        <Box mt={10}>
          <Text fontSize={"3xl"}>JavaScript </Text>
          <SimpleGrid columns={[1, 2, 4]} spacing={10} mt={4}>
            {responsive.map((item) => {
              return (
                <Box>
                  <Box
                    onClick={(e) => {
                      navigate("/weeekly-content", { state: item });
                    }}
                  >
                    <Card name="Html & Css" submitted={true} />
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default Video_resources;
