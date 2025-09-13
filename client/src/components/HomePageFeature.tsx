import { Box, Heading, Text } from "@chakra-ui/react";

type featureProps = {
    title: string,
    desc: string,
    icon: React.JSX.Element,
    extra: string
}

const Features = ({ title, desc, icon, extra, ...rest }: featureProps) => {
  return (
    <Box
      p={8}
      shadow="md"
      borderWidth="5px"
      {...rest}
      borderColor="brand.violet"
      textAlign='center'
    >
      {icon}
      <Heading fontSize="1.4em" pt={2} mt={2}>
        {title}
      </Heading>
      <Text mt={3}>{desc}</Text>
      <br></br>
      <Text>{extra}</Text>
    </Box>
  );
};

export default Features;
