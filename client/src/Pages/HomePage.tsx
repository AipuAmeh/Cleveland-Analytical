import { Box, Flex, FormControl, Icon, Image, Text } from "@chakra-ui/react";
import { WarningIcon} from '@chakra-ui/icons';
import Features from "../components/HomePageFeature";

const HomePage = () => {
return (
    <Box> 
        <Box position="relative" display="inline-block">
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
                     fontSize="4em"
                     fontWeight="bold"
                     mr='3em'
              >Cleveland <br /> Analytical</Text>
            </Box>
        </Box>
        <Box>
            <Text textAlign='center' fontSize='2em' mt='0.5em'>What We Do</Text>
            <Flex gap='3em' px='4em' py={6}>
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
        <Box>
            <FormControl>
                
            </FormControl>
        </Box>
    </Box>
)
};


export default HomePage;