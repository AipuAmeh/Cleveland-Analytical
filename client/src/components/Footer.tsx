import { Box, Divider, Flex, Spacer, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Flex direction='column'  bg="brand.violet" color="white" >
    <Box display="flex" flexDirection="row" p={4} justifyContent='space-between'>
      <Box px='3em'>
        <Text fontSize='1.2em' fontWeight='bold'>Lab Services</Text>
        <Link to='/forms'>
        <Text mt='0.5em' >Lead Chain of Custody</Text>
        </Link>

      </Box>
      <Box>
        <Text fontSize='1.2em' fontWeight='bold'>Contact Us</Text>
            <Text className="contact-list" mt='0.5em' >info@clevelandanalytical.com</Text>
            <Text className="contact-list" mt='1em'>123 Pineville Ln, Jersey, California, 9988993</Text>
            <Text className="contact-list" mt='1em'>(123)456-7891</Text>
      </Box>
      <Box>
        <Text fontSize='1.2em' fontWeight='bold' px='3em'>Follow Us</Text>
      </Box>
    </Box>
    <Divider borderColor='brand.snow' borderWidth='1px' />
    <Box display='flex' alignItems='center' border='white.500' p={4}>
 
<Text>Cleveland Analytical</Text>
<Spacer />
<Text> &copy;2024 ABA Creations{" "}</Text>
    </Box>
    </Flex>

  );
};

export default Footer;
