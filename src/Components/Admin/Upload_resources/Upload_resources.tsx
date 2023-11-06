import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useCreateResouce } from "../../../hooks/hook";
import axios from "axios";

interface Props {}

const Upload_resources = (props: Props) => {
  const videosURL = "http://localhost:5002/api/v1/resources";

  const [name, setName] = useState("");
  const [stack, setStack] = useState("");
  const [module, setModule] = useState("");
  const [link, setLink] = useState("");

  const handeSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      await axios
        .post(videosURL, {
          module,
          title: name,
          week: 4,
          resourceLink: link,
          stack,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box>
      <form onSubmit={handeSubmit}>
        {" "}
        <Flex w={"100%"} align={"center"}>
          <Box w={"50%"}>
            <FormControl>
              <FormLabel>Resouce Name</FormLabel>
              <Input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormControl>
            <Flex justify={"space-between"}>
              <FormControl>
                <FormLabel>Module</FormLabel>
                <Select
                  placeholder="Select country"
                  value={module}
                  onChange={(e) => {
                    setModule(e.target.value);
                  }}
                >
                  <option>Html & Css</option>
                  <option>Bootstrap</option>
                  <option>Version Control</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Stack</FormLabel>
                <Select
                  placeholder="Select country"
                  value={stack}
                  onChange={(e) => {
                    setStack(e.target.value);
                  }}
                >
                  <option>Frontend</option>
                  <option>Backend</option>
                </Select>
              </FormControl>
            </Flex>

            <FormControl>
              <FormLabel fontSize={"xl"}>Video link </FormLabel>
              <InputGroup size="md">
                <InputLeftAddon children="https://" />
                <Input
                  placeholder="mysite"
                  value={link}
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                />
              </InputGroup>
            </FormControl>

            <Box mt={5}>
              <Button
                type="submit"
                w={["100%"]}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

export default Upload_resources;
