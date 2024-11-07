import Header from "./Header";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

const HeroSection = () => {
  const mobileSiteName = useBreakpointValue({
    base: "2em",
    sm: "2em",
    md: "3em",
    lg: "3em",
  });

  return (
    <Box className="hero-container">
      <Header />
      <img src="src/images/cle-lab-photo.png" alt="Hero" className="hero-image" />
      <Box className="overlay" display="flex" alignItems="flex-end">
        <Text className="logo" mr={mobileSiteName}>
          Cleveland <br /> Analytical
        </Text>
      </Box>
    </Box>
  );
};

export default HeroSection;
