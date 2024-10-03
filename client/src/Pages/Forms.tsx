import { Box, Image, Square, Text } from "@chakra-ui/react";

const Forms = () => {
return (
    <Box>
             <Box position="relative" display="inline-block">
            <Image
            boxSize='650px'
            w='100%'  
            src='src/images/test-tubes.png'
            alt='lead-sample-hero-image'
            />
            <Box display='flex' justifyContent='flex-start' alignItems='center'>
            <Text
                     position="absolute"
                     top="30%"
                     color="brand.black"
                     fontSize="3em"
                     ml='3em'
              >Forms</Text>
            </Box>  

    </Box>
    <Square
            size="250px"
            bg="brand.chineseViolet"
            shadow="lg"
            fontWeight="bold"
          >
            Contact Us
          </Square>
    </Box>
)

}

export default Forms;