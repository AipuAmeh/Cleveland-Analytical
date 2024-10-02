import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";

const BioCards = () => {
return (
//     <Card maxW='sm'>
//   <CardBody>
<Box>
<Image
      src='gibbresh.png' 
      fallbackSrc='https://via.placeholder.com/150'
      alt='headshots'
      borderRadius='full'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>

    </Stack>
</Box>

//   </CardBody>

// </Card>
)


};

export default BioCards;