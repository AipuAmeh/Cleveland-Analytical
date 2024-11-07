import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Input,
  Text,
  Textarea,
  useBreakpointValue,
  ResponsiveValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { isInvalidEmail } from "../utils/EmailValidation";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";

const ContactUs = () => {
  //breakpoints for mobile screens
  const mobileLayout = useBreakpointValue<
    ResponsiveValue<"row" | "column" | "row-reverse" | "column-reverse">
  >({ base: "column", sm: "column", md: "row", lg: "row" });
  const mobileText = useBreakpointValue<
    ResponsiveValue<"center" | "left" | "right">
  >({ base: "center", sm: "center", md: "left", lg: "left" });
  const mobileWidthText = useBreakpointValue({
    base: "100%",
    sm: "100%",
    md: "30%",
    lg: "30%",
  });
  const mobileWidthForm = useBreakpointValue({
    base: "100%",
    sm: "100%",
    md: "70%",
    lg: "70%",
  });
  const formMobileMargin = useBreakpointValue({
    base: "0",
    sm: "0",
    md: " 3em",
    lg: "3em",
  });
  const contactAlign = useBreakpointValue<
    ResponsiveValue<"center" | "left" | "right">
  >({ base: "center", sm: "center", md: "left", lg: "left" });
  const buttonAlign = useBreakpointValue<
    ResponsiveValue<"center" | "left" | "right">
  >({ base: "center", sm: "center", md: "left", lg: "left" });

  // add contact functionality here also

  const toast = useToast();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
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
        title: "Succes",
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
    <Box p="5em">
      <Header />
      <Text fontSize="3em" mt="1em" textAlign={mobileText}>
        How Can We Help?
      </Text>
      <Flex direction={mobileLayout}>
        <Box w={mobileWidthText} mt="3em">
          <Text mt="4em" fontSize="md" lineHeight="1.75em">
            CLE Analytical aims to be a vital addition to Cleveland's resources
            for tackling lead contamination.
          </Text>
          <Text mt="3em" fontSize="md" lineHeight="1.75em">
            Interested in learning more?
          </Text>
          <br />
          <Text fontSize="md">Connect with us today!</Text>
          <Box mt="4em" textAlign={contactAlign}>
            <Text mt="2em" fontSize="1.75em" fontWeight="bold">
              Contact Info
            </Text>
            <Text mt="0.5em">
              <EmailIcon boxSize={5} mr="0.5em" /> info@clevelandanalytics.com
            </Text>
            <Text mt="1em">
              <PhoneIcon boxSize={5} mr="0.5em" /> (123) 456 - 7890
            </Text>
          </Box>
        </Box>
        <Box w={mobileWidthForm} ml={formMobileMargin} mt="3em">
          <Text mt="2em" fontSize="1em" fontWeight="bold">
            We want to hear from you!
          </Text>
          <FormControl mt="1em">
            <Input
              placeholder="Name"
              type="text"
              variant="filled"
              size="lg"
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
              size="lg"
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
              size="lg"
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
              size="lg"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            <Textarea
              placeholder="Additional Information"
              mt="1.5em"
              variant="filled"
              size="lg"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <Box mt="1.5em" display="flex" justifyContent={buttonAlign}>
              <Button
                bg="brand.chineseViolet"
                color="white"
                size="lg"
                onClick={handleFormSubmit}
              >
                Submit
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Flex>
      <Box></Box>
    </Box>
  );
};

export default ContactUs;
