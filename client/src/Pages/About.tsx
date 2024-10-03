import { Box, Flex, Image, Square, Text } from "@chakra-ui/react";
import BioCards from "../components/BioCards";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box>
      <Flex direction="row" px="4em" pt="3em">
        <Box boxSize="xl" ml="4em" w="50%">
          <Image
            mt="1.5em"
            h="480px"
            w="550px"
            src="src/images/about-img.png"
            alt="test-lead-sample"
          />
        </Box>
        <Box ml="6em" w="50%">
          <Text fontSize="3em">Cleveland Analytical Lab</Text>
          <Text mt="1em" lineHeight="1.75em">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Leo accumsan
            lacinia euismod velit justo ante. Bibendum ac posuere ipsum torquent
            mus. Fames fames litora lacinia platea quam venenatis ante. Ex
            natoque parturient faucibus erat iaculis. Ipsum euismod maximus
            consequat interdum id aptent ultrices mollis litora. Dignissim sem
            dapibus orci aenean viverra habitasse primis in. Efficitur velit
            pretium taciti quam justo potenti? Morbi pellentesque massa ultrices
            finibus ultrices dictum accumsan magna.
          </Text>
        </Box>
      </Flex>
      <Flex direction="column" bg="transparent.thistle">
        <Text fontSize="2em" textAlign="center" mt="1.5em">
          Meet The Team
        </Text>
        <Flex direction="row" justifyContent="center" gap={"3em"}>
          <Box w="25%">
            <BioCards
              name={"Ozimba Anyangwe"}
              bio={
                "Ozimba Anyangwe is Chief Quality Officer. He has experience as a chemist running US EPA methods at Cleveland Water. Ozimba has experience teaching a first-year chemistry lab at Cuyahoga Community College and holds an MBA from Cleveland State University."
              }
            />
          </Box>
          <Box w="25%">
            <BioCards
              name={"Dr. Michael Fricke"}
              bio={
                "Michael Fricke, Ph.D. is Chief Scientific Officer. He has been an analytical development chemist in the pharmaceutical industry since 2006. He is an atomic spectroscopy specialist and Counselor for the Akron Section of the American Chemical Society. "
              }
            />
          </Box>
          <Box w="25%">
            <BioCards
              name={"Tyler Akbar"}
              bio={
                "Akbar Tyler is Chief Executive Officer. He has started several small businesses and was previously Director of Training and Healthy Homes for Environmental Health Watch. Akbar conducts home inspections for Lead and is a Lead risk assessor. "
              }
            />
          </Box>
        </Flex>
      </Flex>
      <Box
        display="flex"
        flexDirection="row"
        gap="5em"
        color="white"
        justifyContent="center"
        py="3em"
        fontSize="2em"
      >
        <Link to={"#"}>
          <Square
            size="250px"
            bg="brand.chineseViolet"
            shadow="lg"
            fontWeight="bold"
          >
            Forms
          </Square>
        </Link>
        <Link to={"#"}>
          <Square
            size="250px"
            bg="brand.chineseViolet"
            shadow="lg"
            fontWeight="bold"
          >
            Contact Us
          </Square>
        </Link>
      </Box>
    </Box>
  );
};

export default About;
