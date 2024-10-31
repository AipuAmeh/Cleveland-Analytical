import { Box, Image, Text } from "@chakra-ui/react";
import GetInTouchForm from "../components/GetInTouchForm";

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
w='300px'
h='260px'
src='src/images/plain-lead.png'>

  </Image>
          <Text mt='1em' fontSize='1.5em'>Lead Chain of Custody</Text>
    </Box>
< GetInTouchForm />
    </Box>
)

}

export default Forms;