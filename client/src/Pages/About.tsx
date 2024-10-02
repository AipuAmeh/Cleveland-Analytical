import { Box, Flex, Image, Text } from "@chakra-ui/react";
import BioCards from "../components/BioCards";

const About = () => {
return (
    <Box>
       <Flex direction='row' px='4em' pt='3em'>
        <Box boxSize='xl' ml='4em' w='50%' >
         <Image 
         mt='1.5em'
         h='480px'
         w='550px'
         src='src/images/about-img.png'
         alt='test-lead-sample'
         />
        </Box>
        <Box ml='6em' w='50%'>
            <Text fontSize='3em'>Cleveland Analytical Lab</Text>
            <Text mt='1em' lineHeight='1.75em'>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Leo accumsan lacinia euismod velit justo ante. Bibendum ac posuere ipsum torquent mus. Fames fames litora lacinia platea quam venenatis ante. Ex natoque parturient faucibus erat iaculis. Ipsum euismod maximus consequat interdum id aptent ultrices mollis litora. Dignissim sem dapibus orci aenean viverra habitasse primis in. Efficitur velit pretium taciti quam justo potenti? Morbi pellentesque massa ultrices finibus ultrices dictum accumsan magna.
            </Text>
        </Box>
       </Flex>
       <Flex  direction='column' bg='transparent.thistle'>
        <Text fontSize='2em' textAlign='center' mt='1.5em'>Meet The Team</Text>
        <Flex direction='row' justifyContent='center'>
        <Box w='30%' >
        <BioCards />
        </Box>
        <Box w='30%'>
        <BioCards />
        </Box>
        <Box w='30%'>
        <BioCards />
        </Box>
        </Flex>

      
       </Flex>
    </Box>
)
}



export default About;