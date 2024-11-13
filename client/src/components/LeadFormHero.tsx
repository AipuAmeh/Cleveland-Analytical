import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import HeaderForHero from "./HeaderForHero";

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
      <img src="public/images/cle-lab-photo.png" alt="Hero" className="hero-image" />
      <Box className="overlay" display="flex" alignItems="flex-end">
        <Text className="logo" mr={mobileSiteName} color='brand.snow'>
         Forms
        </Text>
      </Box>
    </Box>
  );
};

export default HeroSection;