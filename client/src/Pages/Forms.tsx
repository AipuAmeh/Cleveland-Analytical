import { Box, Image, Text } from "@chakra-ui/react";
import GetInTouchForm from "../components/GetInTouchForm";
import LeadFormHero from "../components/LeadFormHero";

const Forms = () => {
return (
    <Box>
    <LeadFormHero />
    <Box ml='4em' py='3em'>
    <Image
w='300px'
h='260px'
src='src/images/plain-lead.png'>

  </Image>
          <Text mt='1em' fontSize='1.4em'>Lead Chain of Custody</Text>
    </Box>
< GetInTouchForm />
    </Box>
)

}

export default Forms;