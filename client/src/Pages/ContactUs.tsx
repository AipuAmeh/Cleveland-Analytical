import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormControl, FormHelperText, Input, Text, Textarea } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Box p="5em" >
      <Text fontSize="3em">How Can We Help?</Text>
      <Flex>
        <Box w="30%">
          <Text mt="4em" fontSize='lg' lineHeight='1.75em'>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Leo accumsan
            lacinia euismod velit justo ante. Bibendum ac posuere ipsum torquent
            mus. Fames fames litora lacinia platea quam venenatis ante.
          </Text>
          <Text mt="3em" fontSize='lg' lineHeight='1.75em'>
            Ex natoque parturient faucibus erat iaculis. Ipsum euismod maximus
            consequat interdum id aptent ultrices mollis litora. Dignissim sem
            dapibus orci aenean viverra habitasse primis in. Efficitur velit
            pretium taciti quam justo potenti? 
          </Text>
          <Box>
          <Text mt='2em' fontSize='1.75em' fontWeight='bold'>Contact Info</Text>
          <Text mt='0.5em'>
          <EmailIcon boxSize={5} mr='0.5em'  /> info@clevelandanalytics.com
          </Text>
          <Text mt='1em'>
          <PhoneIcon boxSize={5} mr='0.5em'  /> (123) 456 - 7890
          </Text>
          </Box>

        </Box>
        <Box w="70%" ml='3em'>
          <Text mt='2em' fontSize='1em' fontWeight='bold'>We want to hear from you!</Text>
          <FormControl mt='1em' >
          <Input placeholder="Name" type="text" variant="filled" size='lg' />

          <Input
            placeholder="Company"
            type="text"
            mt="1.5em"
            variant="filled"
            size='lg'
          />

          <Input
            placeholder="Email Address"
            type="email"
            mt="1.5em"
            variant="filled"
            size='lg'
          />
          <FormHelperText>We'll never share your email.</FormHelperText>

          <Input placeholder="Phone" type="text" mt="1.5em" variant="filled" size='lg' />

          <Textarea
            placeholder="Additional Information"
            mt="1.5em"
            variant="filled"
            size='lg'
          />
          <Box mt="1.5em">
            <Button bg="brand.chineseViolet" color="white" size='lg'>
              Submit
            </Button>
          </Box>
        </FormControl>
        </Box>
      </Flex>
      <Box>

      </Box>
    </Box>
  );
};

export default ContactUs;
