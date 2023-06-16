import React, { useState } from "react";
import "./Sign_up.css";
import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  FormHelperText,
  FormErrorMessage,
  FormControl,
  ButtonGroup,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import axios from "axios";

function Sign_up() {
  const baseURL = "http://localhost:5002/api/v1/auth/signup";
  const userBaseURL = "http://localhost:5002/api/v1/students";

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [input, setInput] = useState("");
  const [firstName, setfirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [index, setIndex] = useState("");
  const [phone, setPhone] = useState("");
  const [gen, setGen] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("aaa");
    try {
      const { data } = await axios.post(
        baseURL,
        {
          email,
          password,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        },
        { withCredentials: true }
      );
      try {
        const { data: user } = await axios.post(
          userBaseURL,
          {
            firstName,
            middleName,
            lastName,
            indexNumber: index,
            gen,
            phone,
            email,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
          },
          { withCredentials: true }
        );
        console.log(user);
      } catch (error) {}
    } catch (err) {
      console.log(err);
    }
  };

  const isError = input === "";
  return (
    <div className="con">
      <Center height={["100vh"]}>
        <form onSubmit={handleSubmit}>
          <Box>
            <Center>
              <Box>
                <Image />
                <Text fontSize={"3xl"}>Sign up</Text>
              </Box>
            </Center>
            <Box>
              <Flex
                direction={{ base: "column", md: "row", lg: "row" }}
                gap={3}
                justifyContent={"center"}
              >
                <Box>
                  {" "}
                  <Text fontSize={["md"]}>First Name</Text>
                  <Input
                    placeholder="medium size"
                    size="md"
                    width={[300]}
                    value={firstName}
                    variant="filled"
                    onChange={(e) => {
                      setfirstName(e.target.value);
                    }}
                  />
                </Box>

                <Box>
                  {" "}
                  <Text fontSize={["md"]}>Middle Name</Text>
                  <Input
                    placeholder="medium size"
                    size="md"
                    width={[300]}
                    value={middleName}
                    variant="filled"
                    onChange={(e) => {
                      setMiddleName(e.target.value);
                    }}
                  />
                </Box>
                <Box>
                  {" "}
                  <Text fontSize={["md"]}>Last Name</Text>
                  <Input
                    placeholder="medium size"
                    size="md"
                    width={[300]}
                    value={lastName}
                    variant="filled"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </Box>
              </Flex>
            </Box>
            <Box>
              {" "}
              <Flex
                direction={{ base: "column", md: "row", lg: "row" }}
                gap={3}
              >
                <Box>
                  {" "}
                  <Text fontSize={["md"]}>Index Number</Text>
                  <NumberInput variant="filled">
                    <NumberInputField
                      placeholder="medium size"
                      fontSize={"md"}
                      width={[300]}
                      value={index}
                      onChange={(e) => {
                        setIndex(e.target.value);
                      }}
                    />
                  </NumberInput>
                </Box>

                <Box>
                  {" "}
                  <Text fontSize={["md"]}>Gen</Text>
                  <NumberInput width={[300]} variant="filled">
                    <NumberInputField
                      placeholder="medium size"
                      fontSize={"md"}
                      value={gen}
                      onChange={(e) => {
                        setGen(e.target.value);
                      }}
                    />{" "}
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Box>
                <Box>
                  {" "}
                  <Text fontSize={["md"]}>Phone No:</Text>
                  <InputGroup
                    placeholder="medium size"
                    fontSize={"md"}
                    width={[300]}
                    variant="filled"
                  >
                    <InputLeftElement pointerEvents="none">
                      <PhoneIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      type="tel"
                      placeholder="Phone number"
                      variant="filled"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </InputGroup>
                </Box>
              </Flex>
            </Box>

            <Box>
              <Flex
                direction={{ base: "column", md: "row", lg: "row" }}
                gap={3}
              >
                <Box>
                  {" "}
                  <Text fontSize={["md"]}>Email</Text>
                  <Input
                    type="email"
                    placeholder="medium size"
                    size="md"
                    width={[300]}
                    variant="filled"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Box>

                <Box>
                  {" "}
                  <Text fontSize={["md"]}>Password</Text>
                  <InputGroup size="md" width={[300]}>
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      variant="filled"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Flex>
            </Box>
            <Box marginTop={5}>
              <ButtonGroup variant="outline" spacing="6">
                <Button
                  colorScheme="blue"
                  color={"white"}
                  width={200}
                  type="submit"
                  backgroundColor={"blue.400"}
                >
                  submit
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </form>
      </Center>
    </div>
  );
}

export default Sign_up;
