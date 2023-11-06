import {
  Box,
  Flex,
  Input,
  Text,
  Select,
  InputLeftAddon,
  InputGroup,
  Button,
  Image,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useAppSelector } from "../../hooks/hook";

type Props = {};

function Submit({}: Props) {
  const { student } = useAppSelector((state) => state.student);
  console.log(student);
  const baseURL = "http://localhost:5002/api/v1/assignments/";

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const [image, setImage] = useState("");
  const [indexNumber, setIndexNumber] = useState<number>(student.indexNumber);
  const [gen, setGen] = useState<string | null>(student.gen);
  const [topic, setTopic] = useState<string | number>();
  const [week, setWeek] = useState<string | null>("");
  const [title, setTitle] = useState<string | null>("");
  const [gitLink, setGitLink] = useState<string | null>("");
  const [demoLink, setDemolink] = useState<string | null>("");
  const [imageFile, setImageFile] = useState<any>(null);

  const isError = indexNumber === null;
  const isGenError = gen === null;
  const isTopicError = topic === null;
  const isWeekError = week === "";
  const isTitleError = title === "";
  const isImageError = imageFile === null;

  const handleValidation = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (indexNumber === null) {
      alert("Please fill all indexNumber");
    }
    if (gen === null) {
      alert("Please input gen");
    }

    if (week === "") {
      alert("Please input week");
    }
    if (title === "") {
      alert("Please input title");
    }
  };

  const titles = [
    "Html & Css",
    "Responsive (Bootstrap)",
    "Version Control",
    "JavaScript",
  ];
  useEffect(() => {
    if (imageFile) {
      setImage(URL.createObjectURL(imageFile));
    }
  }, [imageFile]);
  const handleSetFileName = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    setImageFile(selectedFiles?.[0]);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", imageFile);

    console.log("aaa");
    try {
      const { data: assignment } = await axios.post(
        baseURL + student._id,
        {
          title,
          indexNumber,
          student: student._id,
          gen,
          week,
          github_link: gitLink,
          demo_link: demoLink,
          topic,
          pdfUrl: "xxxxxxx",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        },
        { withCredentials: true }
      );
      if (assignment.newAssignment) {
        try {
          const data = await axios.put(
            baseURL + student._id + "/" + assignment.newAssignment._id,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              withCredentials: true,
            }
          );

          console.log(data.data);
        } catch (err) {
          console.log(err);
        }
      }
      setOverlay(<OverlayOne />);
      onOpen();
      console.log(assignment);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(topic);

  const uploadImage = async (id: string) => {
    const formData = new FormData();
    formData.append("file", imageFile);

    console.log(formData);
    try {
      const data = await axios.put(baseURL + student._id + "/" + id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      console.log(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Box>
        <Box>
          <Text fontSize={"3xl"}>Submit Assignment</Text>
        </Box>
        <Flex direction={["column", "row"]} w={"100%"}>
          <Box mt={10} w={["100%", "50%"]} p={5} borderRadius={10}>
            <form onSubmit={handleSubmit}>
              <Flex direction={["column", "row"]}>
                <Box w={["100%", "50%"]}>
                  {" "}
                  <FormControl isInvalid={isError}>
                    <FormLabel fontSize={"xl"}>Index Number:</FormLabel>{" "}
                    <Input
                      size={"md"}
                      variant="outline"
                      type="number"
                      value={student.indexNumber}
                    />
                    {!isError ? (
                      <FormHelperText></FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        Index number is required.
                      </FormErrorMessage>
                    )}
                  </FormControl>
                </Box>

                <Box w={["100%", "50%"]} ml={[0, 3]}>
                  <FormControl isInvalid={isGenError}>
                    <FormLabel fontSize={"xl"}>Gen:</FormLabel>
                    <Input
                      size={"md"}
                      variant="outline"
                      type="number"
                      value={student.gen}
                      onChange={(e) => {
                        setGen(e.target.value);
                      }}
                    />{" "}
                    {!isError ? (
                      <FormHelperText></FormHelperText>
                    ) : (
                      <FormErrorMessage>Gen is required.</FormErrorMessage>
                    )}
                  </FormControl>
                </Box>
              </Flex>
              <Flex direction={["column", "row"]} mt={3}>
                {" "}
                <Box w={["100%", "50%"]}>
                  <FormControl isRequired>
                    {" "}
                    <FormLabel fontSize={"xl"}>Topic:</FormLabel>
                    <Select
                      placeholder="Select option"
                      onChange={(e) => {
                        setTopic(e.target.value);
                      }}
                    >
                      {titles.map((item) => {
                        return <option value={topic}>{item}</option>;
                      })}
                    </Select>
                  </FormControl>
                </Box>{" "}
                <Box w={["100%", "50%"]} ml={[0, 3]}>
                  <FormControl isInvalid={isWeekError}>
                    <FormLabel fontSize={"xl"}>Week</FormLabel>
                    <Input
                      size={"md"}
                      variant="outline"
                      type="text"
                      onChange={(e) => {
                        setWeek(e.target.value);
                      }}
                    />
                    {!isError ? (
                      <FormHelperText></FormHelperText>
                    ) : (
                      <FormErrorMessage>Week is required.</FormErrorMessage>
                    )}
                  </FormControl>
                </Box>
              </Flex>{" "}
              <Box w={["100%", "100%"]} mt={3}>
                <FormControl isInvalid={isTitleError}>
                  <FormLabel fontSize={"xl"}>Title</FormLabel>
                  <Input
                    size={"md"}
                    variant="outline"
                    type="text"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  {!isError ? (
                    <FormHelperText></FormHelperText>
                  ) : (
                    <FormErrorMessage>Title is required.</FormErrorMessage>
                  )}
                </FormControl>
              </Box>
              <Box w={["100%", "100%"]} mt={3}>
                <FormControl>
                  <FormLabel fontSize={"xl"}>Demo link (Git link)</FormLabel>
                  <InputGroup size="md">
                    <InputLeftAddon children="https://" />
                    <Input
                      placeholder="mysite"
                      onChange={(e) => {
                        setDemolink(e.target.value);
                      }}
                    />
                  </InputGroup>
                  {!isError ? (
                    <FormHelperText></FormHelperText>
                  ) : (
                    <FormErrorMessage>Git is required.</FormErrorMessage>
                  )}
                </FormControl>
              </Box>
              <Box w={["100%", "100%"]} mt={3}>
                <FormControl>
                  <FormLabel fontSize={"xl"}>
                    Repository link (Git link)
                  </FormLabel>
                  <InputGroup size="md">
                    <InputLeftAddon children="https://" />
                    <Input
                      placeholder="mysite"
                      onChange={(e) => {
                        setGitLink(e.target.value);
                      }}
                    />
                  </InputGroup>
                  {!isError ? (
                    <FormHelperText></FormHelperText>
                  ) : (
                    <FormErrorMessage>Git is required.</FormErrorMessage>
                  )}
                </FormControl>
              </Box>
              <Box mt={3}>
                {" "}
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
            </form>
          </Box>
          <Box w={["100%", "50%"]} mt={10} p={5} borderRadius={10}>
            <Box>
              <Box w={["100%", "50%"]} justifyContent={"center"}>
                {image ? (
                  <Image src={image} boxSize={"250px"} objectFit="cover" />
                ) : (
                  <Text>Select assignment snapshots</Text>
                )}

                <Input
                  type="file"
                  h={[10]}
                  accept="image/*"
                  onChange={handleSetFileName}
                  border={"none"}
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Custom backdrop filters!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Submit;
