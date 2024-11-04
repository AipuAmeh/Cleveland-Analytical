import { Box, Flex, Icon, Text, useBreakpointValue, ResponsiveValue } from "@chakra-ui/react";
import { LuMicroscope } from "react-icons/lu";
import { FaShieldAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import Features from "../components/HomePageFeature";
import GetInTouchForm from "../components/GetInTouchForm";
import HeroSection from "../components/HomePageHero";

const HomePage = () => {
    const whatWeDoMobile = useBreakpointValue<ResponsiveValue<'row' | 'column' | 'row-reverse' | 'column-reverse'>>({ base: 'column', sm: 'column', md: 'row', lg: 'row'});
return (
    <Box> 
      <HeroSection />
        <Box py='3em'>
            <Text textAlign='center' fontSize='2em'>What We Do</Text>
            <Flex gap='3em' px='4em' py={6} direction={whatWeDoMobile}>
          <Features 
        icon={<Icon fontSize="25px"> <LuMicroscope /> </Icon>}
          title='Specialized Lead Analysis'
          desc='Cleveland Analytical specializes in elemental analysis, with a focus on lead testing using advanced ICP-OES technology.'
          />
                    <Features 
          icon={<Icon fontSize="25px"> <FaShieldAlt /> </Icon>}
          title='EPA Accreditation'
          desc='The lab seeks accreditation from the EPA&lsquo;s NLLAP and will support Cleveland&lsquo;s 2019 Lead-safe Law.'
          />
                    <Features 
          icon={<Icon fontSize="25px"> <FaGear /> </Icon>}
          title='State-of-the-Art Facility'
          desc='CLE Analytical&lsquo;s lab includes state-of-the-art equipment to ensure compliance with regulatory standards and safe handling practices.'
          />
            </Flex>
        </Box>
< GetInTouchForm />
    </Box>
)
};


export default HomePage;