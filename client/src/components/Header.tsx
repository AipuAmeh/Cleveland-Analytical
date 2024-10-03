import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex alignItems="center" gap="2" minWidth="max-content" p={0}>
      <Box p={3}> 
        {" "}
        <Link to={"/"}>
        <Image     
        boxSize='50px'
        w='100%'
        src='src/images/cleveland-analytical.jpeg'
        alt='cleveland-analytical-logo'
        >
        </Image>      
        </Link>

      </Box>
      <Spacer gap={10} />
      <Box display="flex" justifyContent="flex-start" gap={20} mr={10}>
        <Link to='/about'>
        <Text>About</Text>
        </Link>
        <Link to='/contact-us'>
        <Text>Contact Us</Text>
        </Link>
        <Link to='/forms'>
        <Text>Forms</Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
