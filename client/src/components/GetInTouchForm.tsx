import {
  Box,
  Text,
  FormControl,
  Input,
  FormHelperText,
  Textarea,
  Button,
  useBreakpointValue,
  ResponsiveValue
} from "@chakra-ui/react";

const GetInTouchForm = () => {
  // why is direction erroring?
  const mobileFormLayout = useBreakpointValue<ResponsiveValue<'row' | 'column' | 'row-reverse' | 'column-reverse'>>({ base:'column', sm: 'column', md: 'row', lg: 'row'});
  const mobileFormWidth = useBreakpointValue({ base:'100%', sm: '100%', md: '50%', lg: '50%'});
  const mobileSectionMargin = useBreakpointValue({ base: '3em', sm: '3em', md: '6em', lg: '6em'});
  return (
    <Box bg="transparent.thistle">
    <Box  display="flex" id='get-in-touch' flexDirection={mobileFormLayout}>
 
      <Box w={mobileFormWidth}>
      <Text fontSize="2em"  pt='1.5em' pl='2em'>
    Get In Touch With Us
  </Text>
  <Box px="4em"  mt={mobileSectionMargin} >
  <Text fontSize='lg' lineHeight='1.75em'>
  CLE Analytical aims to be a vital addition to Cleveland's resources for tackling lead contamination.
        </Text>
        <Text mt="3em" fontSize='lg' lineHeight='1.75em'>
        Interested in learning more?
        </Text>
        <Text mt="3em" fontSize='lg' lineHeight='1.75em'>
        Leave us a message.
        </Text>
  </Box>

      </Box>
      <Box w={mobileFormWidth} mt="5em" px="5em">
        <FormControl bg="brand.thistle" p="3em" mb='5em' shadow="md">
          <Input placeholder="Name" type="text" variant="filled" />

          <Input
            placeholder="Company"
            type="text"
            mt="1.5em"
            variant="filled"
          />

          <Input
            placeholder="Email Address"
            type="email"
            mt="1.5em"
            variant="filled"
          />
          <FormHelperText>We'll never share your email.</FormHelperText>

          <Input placeholder="Phone" type="text" mt="1.5em" variant="filled" />

          <Textarea
            placeholder="Additional Information"
            mt="1.5em"
            variant="filled"
          />
          <Box mt="1.5em">
            <Button bg="brand.chineseViolet" color="white">
              Submit
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Box>
    </Box>

  );
};

export default GetInTouchForm;
