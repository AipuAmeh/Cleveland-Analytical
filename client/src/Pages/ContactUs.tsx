import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormControl, FormHelperText, Input, Text, Textarea, useBreakpointValue, ResponsiveValue } from "@chakra-ui/react";

const ContactUs = () => {

  //breakpoints for mobile screens
  const mobileLayout = useBreakpointValue<ResponsiveValue<'row' | 'column' | 'row-reverse' | 'column-reverse'>>({ base: 'column', sm: 'column', md: 'row', lg: 'row'});
  const mobileText = useBreakpointValue<ResponsiveValue<'center' | 'left' | 'right'>>({ base: 'center', sm: 'center', md: 'left', lg: 'left' });
  const mobileWidthText = useBreakpointValue({ base: '100%', sm: '100%', md: '30%', lg: '30%'});
  const mobileWidthForm = useBreakpointValue({ base: '100%', sm: '100%', md: '70%', lg: '70%'});
  const formMobileMargin = useBreakpointValue({ base: '0', sm: '0', md:' 3em', lg: '3em'});
  const contactAlign = useBreakpointValue<ResponsiveValue<'center' | 'left' | 'right'>>({ base: 'center', sm: 'center', md: 'left', lg: 'left' });
  const buttonAlign = useBreakpointValue<ResponsiveValue<'center' | 'left' | 'right'>>({ base: 'center', sm: 'center', md: 'left', lg: 'left' });

  return (
    <Box p="5em" >
      <Text fontSize="3em" textAlign={mobileText}>How Can We Help?</Text>
      <Flex direction={mobileLayout}>
        <Box w={mobileWidthText} mt='3em'>
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
          <Box mt='4em' textAlign={contactAlign}>
          <Text mt='2em' fontSize='1.75em' fontWeight='bold'>Contact Info</Text>
          <Text mt='0.5em'>
          <EmailIcon boxSize={5} mr='0.5em'  /> info@clevelandanalytics.com
          </Text>
          <Text mt='1em'>
          <PhoneIcon boxSize={5} mr='0.5em'  /> (123) 456 - 7890
          </Text>
          </Box>

        </Box>
        <Box w={mobileWidthForm} ml={formMobileMargin} mt='3em'>
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
          <Box mt="1.5em" display='flex' justifyContent={buttonAlign}>
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
