import { Box, Text, useBreakpointValue, ResponsiveValue } from "@chakra-ui/react";
import HeaderForHero from "./HeaderForHero";

// work on margin for mobile
const HeroSection = () => {
  const mobileSiteName = useBreakpointValue({
    base: "0em",
    sm: "0em",
    md: "2em",
    lg: "2em",
  });
  const mobileSlogan = useBreakpointValue({
    base: "0em",
    sm: "0em",
    md: "4em",
    lg: "4em",
  });
  const mobileLayout = useBreakpointValue<
  ResponsiveValue<"center" | "flex-end" | "flex-start">
>({ base: "center", sm: "center", md: "flex-end", lg: "flex-end" });

  return (
    <Box className="hero-container">
      <HeaderForHero />
      <img src="public/images/cle-lab-photo.png" alt="Hero" className="hero-image" />
      <Box className="overlay" display='flex' alignItems={mobileLayout} >
        <Text  fontSize='3em' className="logo" mr={mobileSiteName}>
          Cleveland <br /> Analytical
        </Text>
        <Text fontSize='1.5em' mr={mobileSlogan} >Empowering a Lead-Safe Future for Cleveland.</Text>

      </Box>
    </Box>
  );
};

export default HeroSection;
