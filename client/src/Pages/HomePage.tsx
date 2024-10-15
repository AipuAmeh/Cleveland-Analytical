import { Box, Flex, Icon, Image, Text, useBreakpointValue, ResponsiveValue } from "@chakra-ui/react";
import { WarningIcon} from '@chakra-ui/icons';
import Features from "../components/HomePageFeature";
import GetInTouchForm from "../components/GetInTouchForm";

const HomePage = () => {
    const mobileSiteName = useBreakpointValue({ base: '2em', sm: '2em', md: '3em', lg: '3em'});
    const whatWeDoMobile = useBreakpointValue<ResponsiveValue<'row' | 'column' | 'row-reverse' | 'column-reverse'>>({ base: 'column', sm: 'column', md: 'row', lg: 'row'});
return (
    <Box> 
        <Box position="relative" display='flex' id='hero-section'>
            <Image
            boxSize='650px'
            w='100%'  
            src='src/images/screenshot.png'
            alt='lead-sample-hero-image'
            />
            <Box display='flex' justifyContent='flex-end' alignItems='center'>
            <Text
                     position="absolute"
                     top="30%"
                     color="brand.black"
                     fontSize="3em"
                     fontWeight="bold"
                     mr={mobileSiteName}
              >Cleveland <br /> Analytical</Text>
            </Box>
        </Box>
        <Box py='3em'>
            <Text textAlign='center' fontSize='2em'>What We Do</Text>
            <Flex gap='3em' px='4em' py={6} direction={whatWeDoMobile}>
          <Features 
          icon={<Icon as={WarningIcon} boxSize={6} />}
          title='Lorem Ipsum'
          desc='Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque tempor a sapien montes malesuada donec curabitur aenean.'
          />
                    <Features 
          icon={<Icon as={WarningIcon} boxSize={6} />}
          title='Lorem Ipsum'
          desc='Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque tempor a sapien montes malesuada donec curabitur aenean.'
          />
                    <Features 
          icon={<Icon as={WarningIcon} boxSize={6} />}
          title='Lorem Ipsum'
          desc='Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque tempor a sapien montes malesuada donec curabitur aenean.'
          />
            </Flex>
        </Box>
< GetInTouchForm />
    </Box>
)
};


export default HomePage;