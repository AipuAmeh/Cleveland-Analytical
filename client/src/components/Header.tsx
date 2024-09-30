import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex alignItems="center" gap="2" minWidth="max-content">
      <Box p="2">
        <Heading size="md">Cleveland Analytical Image</Heading>
      </Box>
      <Spacer gap={15} />
      <Box display="flex" justifyContent="flex-start" gap={10}>
        <Link to='#'>
        <Text>About</Text>
        </Link>
        <Link to='#'>
        <Text>Contact Us</Text>
        </Link>
        <Link to='#'>
        <Text>Forms</Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
