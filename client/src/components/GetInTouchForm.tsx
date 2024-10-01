import {
  Box,
  Text,
  FormControl,
  Input,
  FormHelperText,
  Textarea,
  Button,
} from "@chakra-ui/react";

const GetInTouchForm = () => {
  return (
    <Box bg="transparent.thistle" display="flex">
      <Box w="50%" mt="12em" px="4em">
        <Text fontSize='xl'>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque
          tempor a sapien montes malesuada donec curabitur aenean. Per penatibus
          accumsan eget ridiculus elementum interdum nisl morbi quam. Vel ligula
          velit ac;
        </Text>
        <Text mt="3em" fontSize='xl'>
          netus nisl iaculis. Faucibus fusce nisi varius bibendum lacinia
          vulputate egestas. Litora felis leo habitant at vitae natoque. Nisl
          quis semper lacinia vestibulum felis elit, vitae fusce class. Quis
          placerat dapibus mus dolor consectetur torquent facilisi consectetur
          tortor. Eu velit molestie tristique finibus donec dictum donec.
        </Text>
      </Box>
      <Box w="50%" mt="4em" px="5em">
        <Text fontSize="2em" pb="1.5em">
          Get In Touch With Us
        </Text>
        <FormControl bg="brand.thistle" p="3em" mb={8} shadow="md">
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
  );
};

export default GetInTouchForm;
