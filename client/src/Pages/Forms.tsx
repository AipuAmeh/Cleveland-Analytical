import { Box, Square, Text, Icon } from "@chakra-ui/react";
import GetInTouchForm from "../components/GetInTouchForm";
import LeadFormHero from "../components/LeadFormHero";
import { GrNotes } from "react-icons/gr";

const Forms = () => {
return (
    <Box>
    <LeadFormHero />
    <Box ml='4em' py='3em'>
<Square
className="form-card"
size="200px"
shadow="lg"
>
    <Icon boxSize='12em' display='flex' ml='5em' mt='5.5em' >
    <GrNotes />
    </Icon>

</Square>
          <Text mt='1em' fontSize='1.4em'>Lead Chain of Custody</Text>
    </Box>
< GetInTouchForm />
    </Box>
)

}

export default Forms;