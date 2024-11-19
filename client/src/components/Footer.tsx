import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Spacer, Text, Icon, useBreakpointValue, ResponsiveValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {

  const isMobile = useBreakpointValue<
  ResponsiveValue<"row" | "column" | "row-reverse" | "column-reverse">
>({ base: 'column', sm: 'column', md: 'row', lg: 'row'});
  
  return (
    <Flex direction="column" bg="brand.violet" color="white">
      <Box
        display="flex"
        flexDirection="row"
        py={4}
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
        <Box px="3em">
          <Text fontSize="1.2em" fontWeight="bold">
            Contact Us
          </Text>
          <Text mt="0.5em">
            <EmailIcon boxSize={4} mr="0.5em" /> info@clevelandanalytical.com
          </Text>

          <Text className="contact-list" mt="0.5em">
            <Icon boxSize={7} mt='0.2em'>
              <FaLocationDot />
            </Icon>
            7100 Euclid Ave Suite 165, Cleveland, OH, 44103
          </Text>
          <Text mt="0.5em">
            <PhoneIcon boxSize={4} mr="0.5em" /> (216) 785-9043
          </Text>
        </Box>
        <Box px="3em">
          <Text fontSize="1.2em" fontWeight="bold" >
            Follow Us
          </Text>
          <Box gap={2} display='flex' justifyContent='center' mt='1em' flexDirection={isMobile}>
          <a href="https://www.instagram.com/cleanalytical/">
            <Icon boxSize={7}>
              <LuInstagram />
            </Icon>
          </a>
          <a href="https://x.com/cleanalytical">
            <Icon boxSize={7}>
              <BsTwitterX />
            </Icon>
          </a>
          <a href="https://www.linkedin.com/company/cle-analytical/about/">
            <Icon boxSize={8}>
            <FaLinkedin />
            </Icon>
          </a>
          </Box>

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
