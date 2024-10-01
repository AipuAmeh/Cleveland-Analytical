import { Box, Flex, Image, Text } from "@chakra-ui/react";

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
            
        </Box>
    </Box>
)
};


export default HomePage;