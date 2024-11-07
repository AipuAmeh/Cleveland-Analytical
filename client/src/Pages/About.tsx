import {
  Box,
  Flex,
  Image,
  Square,
  Text,
  ResponsiveValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import BioCards from "../components/BioCards";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const About = () => {
  // responsiveness
  const mobileLayout = useBreakpointValue<
    ResponsiveValue<"row" | "column" | "row-reverse" | "column-reverse">
  >({ base: "column", sm: "column", md: "row", lg: "row" });
  const mobileHeaderWidth = useBreakpointValue({
    base: "100%",
    sm: "100%",
    md: "50%",
    lg: "50%",
  });
  const mobileImage = useBreakpointValue({
    base: "center",
    sm: "center",
    md: "none",
    lg: "none",
  });
  const mobilePadding = useBreakpointValue({
    base: "2em",
    sm: "2em",
    md: 0,
    lg: 0,
  });
  const mobileYPadding = useBreakpointValue({
    base: "1em",
    sm: "1em",
    md: 0,
    lg: 0,
  });
  const teamWidth = useBreakpointValue({
    base: "90%",
    sm: "90%",
    md: "25%",
    lg: "25%",
  });
  const teamLayout = useBreakpointValue({
    base: "center",
    sm: "center",
    md: "none",
    lg: "none",
  });
  const mobileMargin = useBreakpointValue({
    base: 0,
    sm: 0,
    md: "3em",
    lg: "3em",
  });
  const mobileLeftMargin = useBreakpointValue({
    base: 0,
    sm: 0,
    md: "5em",
    lg: "5em",
  });
  const mobileTopMargin = useBreakpointValue({
    base: 0,
    sm: 0,
    md: "2.5em",
    lg: "2.5em",
  });
  const mobileGeneralFont = useBreakpointValue({
    base: "1.5em",
    sm: "1.5em",
    md: "1em",
    lg: "1em",
  });

  return (
    <Box>
      <Header />
      <Box
        mt="3em"
        display="flex"
        flexDirection={mobileLayout}
        justifyContent={teamLayout}
        pt="3em"
      >
        <Box
          boxSize="xl"
          display="flex"
          justifyContent={mobileImage}
          w={mobileHeaderWidth}
          ml={mobileLeftMargin}
          mt={"1.7em"}
          h="fit-content"
          mb="4em"
        >
          <Image
            h="400px"
            w="600px"
            src="src/images/cle-group.JPG"
            alt="test-lead-sample"
          />
        </Box>
        <Box
          w={mobileHeaderWidth}
          display="flex"
          flexDirection="column"
          alignItems={mobileImage}
          mx={mobileMargin}
          mt={"0.5em"}
          mb="2.5em"
        >
          <Text fontSize="3em">Cleveland Analytical Lab</Text>
          <Text
            mt={mobileTopMargin}
            lineHeight="1.75em"
            px={mobilePadding}
            py={mobileYPadding}
            fontSize={mobileGeneralFont}
          >
            Cleveland Analytical LLC (CLE Analytical) is a start-up based in
            Cleveland, OH, specializing in analytical chemistry services,
            particularly in elemental analysis. Located at 7100 Euclid Ave, the
            laboratory is equipped with the Agilent 5800 Inductively Coupled
            Plasma – Optical Emission Spectrometer (ICP-OES).
          </Text>

          <br />

          <Text
            lineHeight="1.75em"
            px={mobilePadding}
            py={mobileYPadding}
            fontSize={mobileGeneralFont}
          >
            The lab is currently pursuing accreditation from the US EPA's
            National Lead Laboratory Accreditation Program (NLLAP) and will soon
            begin accepting samples for analysis. Its primary source of samples
            will be the City of Cleveland, which enacted a Lead-safe law in 2019
            requiring rental properties built before 1978 to be certified as
            lead-safe. This initiative addresses the concerning issue of lead
            poisoning, with over 200 severe cases reported in children each
            year.
          </Text>

          <br />

          <Text
            lineHeight="1.75em"
            px={mobilePadding}
            py={mobileYPadding}
            fontSize={mobileGeneralFont}
          >
            CLE Analytical’s facility is designed to meet high standards,
            featuring advanced equipment, including a qualified ICP-OES,
            laboratory exhaust hoods, and sample preparation areas. The lab will
            implement a quality and sample management system to ensure
            compliance with all regulatory authorities.
          </Text>
        </Box>
      </Box>
      <Flex direction="column" bg="transparent.thistle" py="2em">
        <Text fontSize="2em" textAlign="center" mt="1em">
          Meet The Team
        </Text>
        <Flex
          direction={mobileLayout}
          justifyContent="center"
          alignItems={teamLayout}
          gap={"3em"}
          mt="2em"
        >
          <Box w={teamWidth}>
            <BioCards
              image={"src/images/ozimba-headshot.jpg"}
              name={"Ozimba Anyangwe"}
              bio={
                "Ozimba Anyangwe is Chief Quality Officer. He has experience as a chemist running US EPA methods at Cleveland Water. Ozimba has experience teaching a first-year chemistry lab at Cuyahoga Community College and holds an MBA from Cleveland State University."
              }
            />
          </Box>
          <Box w={teamWidth}>
            <BioCards
              image={"src/images/mike-headshot.jpg"}
              name={"Dr. Michael Fricke"}
              bio={
                "Michael Fricke, Ph.D. is Chief Scientific Officer. He has been an analytical development chemist in the pharmaceutical industry since 2006. He is an atomic spectroscopy specialist and Counselor for the Akron Section of the American Chemical Society. "
              }
            />
          </Box>
          <Box w={teamWidth}>
            <BioCards
              image={"src/images/tyler-headshot.jpg"}
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
        px="3em"
        py="3em"
        fontSize="2em"
      >
        <Link to={"#"}>
          <Square
            className="about-pg-cards"
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
            className="about-pg-cards"
            size="250px"
            // bg="brand.chineseViolet"
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
