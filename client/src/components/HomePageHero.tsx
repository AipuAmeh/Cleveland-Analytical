import { Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import HeaderForHero from "./HeaderForHero";

// work on margin for mobile
const HeroSection = () => {
  const mobileSiteName = useBreakpointValue({
    base: "2em",
    sm: "2em",
    md: "3em",
    lg: "3em",
  });

  return (
    <Box className="hero-container">
      <HeaderForHero />
      <img src="src/images/cle-lab-photo.png" alt="Hero" className="hero-image" />
      <Box className="overlay" display='flex' alignItems='flex-end' >
        <Text  fontSize='3em' className="logo" mr='2em'>
          Cleveland <br /> Analytical
        </Text>
        <Text fontSize='1.5em' mr='4em' >Empowering a Lead-Safe Future for Cleveland.</Text>

      </Box>
    </Box>
  );
};

export default HeroSection;
