import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Spacer, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <Flex direction="column" bg="brand.violet" color="white">
      <Box
        display="flex"
        flexDirection="row"
        p={4}
        justifyContent="space-between"
      >
        <Box px="3em">
          <Text fontSize="1.2em" fontWeight="bold">
            Lab Services
          </Text>
          <Link to="/forms">
            <Text mt="0.5em">Lead Chain of Custody</Text>
          </Link>
        </Box>
        <Box>
          <Text fontSize="1.2em" fontWeight="bold">
            Contact Us
          </Text>
          <Text mt="0.5em">
                <EmailIcon boxSize={4} mr="0.5em" /> info@clevelandanalytics.com
              </Text>

          <Text className="contact-list" mt="0.5em">
            <Icon boxSize={7}>
              <FaLocationDot />
            </Icon>
            7100 Euclid Ave Suite 165, Cleveland, OH, 44103
          </Text>
          <Text mt="0.5em">
            <PhoneIcon boxSize={4} mr="0.5em" /> (216) 785-9043
          </Text>
        </Box>
        <Box>
          <Text fontSize="1.2em" fontWeight="bold" px="3em">
            Follow Us
          </Text>
        </Box>
      </Box>
      <Divider borderColor="brand.snow" borderWidth="1px" />
      <Box display="flex" alignItems="center" border="white.500" p={4}>
        <Text>CLE Analytical</Text>
        <Spacer />
        <Text> &copy;2024 ABA Creations </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
