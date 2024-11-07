import {
  Box,
  Text,
  FormControl,
  Input,
  FormHelperText,
  Textarea,
  Button,
  useBreakpointValue,
  ResponsiveValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { isInvalidEmail } from "../utils/EmailValidation";

const GetInTouchForm = () => {
  const mobileFormLayout = useBreakpointValue<
    ResponsiveValue<"row" | "column" | "row-reverse" | "column-reverse">
  >({ base: "column", sm: "column", md: "row", lg: "row" });
  const mobileFormWidth = useBreakpointValue({
    base: "100%",
    sm: "100%",
    md: "50%",
    lg: "50%",
  });
  const mobileSectionMargin = useBreakpointValue({
    base: "3em",
    sm: "3em",
    md: "8em",
    lg: "8em",
  });

  const toast = useToast();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // form error handling/validation
    if (
      name === "" || 
      company === "" ||
      email === "" ||
      phone === "" ||
      message === ""
    ) {
      toast({
        title: "Error",
        description: "Please complete all fields",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    if (isInvalidEmail({ email })) {
      toast({
        title: "Error",
        description: "Please enter a valid email.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    if (name && company && email && phone && message) {
      const templateId = "template_edjxtco";
      const serviceId = "service_v8gg88i";
      const publicKey = "Z2w0bi6iIZ5aC0ixP";
      const templateParams = { name, company, email, phone, message };
      await emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        (result) => {
          return result;
        },
        (error) => {
          console.log(error);
        }
      );
      toast({
        title: "Success",
        description: "Thank you for your interest!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setCompany("");
    } else {
      return;
    }
  };

  return (
    <Box bg="transparent.thistle">
      <Box display="flex" id="get-in-touch" flexDirection={mobileFormLayout}>
        <Box w={mobileFormWidth}>
          <Text fontSize="2em" mt="2.5em" pl="2em">
            Get In Touch With Us
          </Text>
          <Box px="4em" mt={mobileSectionMargin}>
            <Text fontSize="1.3em" lineHeight="1.75em">
              CLE Analytical aims to be a vital addition to Cleveland's
              resources for tackling lead contamination.
            </Text>
            <Text mt="3em" fontSize="1.3em" lineHeight="1.75em">
              Connect with us today to learn more!
            </Text>
          </Box>
        </Box>
        <Box w={mobileFormWidth} mt="5em" px="5em">
          <FormControl bg="brand.thistle" p="3em" mb="5em" shadow="md">
            <Input
              placeholder="Name"
              type="text"
              variant="filled"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <Input
              placeholder="Company"
              type="text"
              mt="1.5em"
              variant="filled"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />

            <Input
              placeholder="Email Address"
              type="email"
              mt="1.5em"
              variant="filled"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>

            <Input
              placeholder="Phone"
              type="text"
              mt="1.5em"
              variant="filled"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            <Textarea
              placeholder="Additional Information"
              mt="1.5em"
              variant="filled"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <Box mt="1.5em">
              <Button
                bg="brand.chineseViolet"
                color="white"
                onClick={handleFormSubmit}
              >
                Submit
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default GetInTouchForm;
