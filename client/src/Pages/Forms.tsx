import { Box, Image, Text } from "@chakra-ui/react";

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
    <Box p='6em'>
    <Image
w='378px'
h='297px'
src='src/images/plain-lead.png'>

  </Image>
          <Text mt='0.5em' fontSize='1.7em'>Lead Chain of Custody</Text>
    </Box>

    </Box>
)

}

export default Forms;