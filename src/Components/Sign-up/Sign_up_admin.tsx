import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  ButtonGroup,
  InputRightElement,
  InputGroup,
  Box,
  Center,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useAppDispatch } from "../../hooks/hook";
import { addUser } from "../../Redux/UserSlice";
import { useNavigate } from "react-router-dom";
import Sign_up from "./Sign_up";

interface Props {}

const Sign_up_admin = (props: Props) => {
  const baseURL = "http://localhost:5002/api/v1/auth/signup";

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        baseURL,
        {
          email,
          password,
          role: "tutor",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        },
        { withCredentials: true }
      );

      setTimeout(() => {
        setLoading(false);
        console.log(data);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {loading ? (
        <Center height={["100vh"]}>
          {" "}
          <Image
            src={require("../../images/loading.gif")}
            objectFit={"contain"}
          />
        </Center>
      ) : (
        <Box>
          <Center height={["100vh"]}>
            <form onSubmit={handleSubmit}>
              {" "}
              <Box>
                <Center>
                  <Box>
                    <Image />
                    <Text fontSize={"3xl"}>SignUp Admin</Text>
                  </Box>
                </Center>
              </Box>
              <FormControl marginTop={10}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="medium size"
                  size="md"
                  width={[250]}
                  variant="filled"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
              <InputGroup size="md" width={[250]} marginTop={10}>
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  variant="filled"
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
              <ButtonGroup variant="outline" spacing="6" marginTop={10}>
                <Button
                  colorScheme="blue"
                  color={"white"}
                  width={[250]}
                  type="submit"
                  backgroundColor={"blue.400"}
                >
                  submit
                </Button>
              </ButtonGroup>
            </form>
          </Center>
        </Box>
      )}
    </div>
  );
};

export default Sign_up_admin;
