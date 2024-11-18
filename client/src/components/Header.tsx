import {
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  // header for mobile screens
  const isMobile = useBreakpointValue({ base: true, md: false, sm: false });
  const mobileImage = useBreakpointValue({ base: '30%', sm: '30%', md: '100%', lg: '100%'});

  return (
    <Flex
      className= 'header'
      alignItems="center"
      gap="2"
      // minWidth="max-content"
      p={0}
      boxShadow="md"
      color='black'
    >
      <Box p={3}>
        {" "}
        <Link to={"/"}>
          <Image
            boxSize="50px"
            // w={mobileImage}
            src="images/cleveland-analytical.jpeg"
            alt="cleveland-analytical-logo"
          ></Image>
        </Link>
      </Box>
      <Spacer gap={10} />
      <Box display="flex" justifyContent="flex-start" gap={20} mr={10}>
        {isMobile ? (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
            <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/about">About</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/contact-us">Contact Us</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/forms">Forms</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <Link to="/about">
              <Text>About</Text>
            </Link>
            <Link to="/contact-us">
              <Text>Contact Us</Text>
            </Link>
            <Link to="/forms">
              <Text>Forms</Text>
            </Link>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Header;
