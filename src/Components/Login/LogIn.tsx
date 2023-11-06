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
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useAppDispatch } from "../../hooks/hook";
import { addUser } from "../../Redux/UserSlice";
import { useNavigate } from "react-router-dom";

interface Props {}

const LogIn = (props: Props) => {
  const baseURL = "http://localhost:5002/api/v1/auth/login";

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
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        },
        { withCredentials: true }
      );

      setTimeout(() => {
        setLoading(false);
        dispatch(addUser(data));
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
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
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
                    <Text fontSize={"3xl"}>LogIn</Text>
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
              <Box>
                <Text
                  alignSelf={"flex-end"}
                  color={"blue.500"}
                  fontSize={12}
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Signup...
                </Text>
              </Box>
            </form>
          </Center>
        </Box>
      )}
    </div>
  );
};

export default LogIn;
