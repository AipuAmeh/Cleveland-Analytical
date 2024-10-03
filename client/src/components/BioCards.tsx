import { Heading, Image, Stack, Text } from "@chakra-ui/react";

type bioCardProps = {
  name: string;
  bio: string;
};

const BioCards = ({ name, bio }: bioCardProps) => {
  return (
    <Stack alignItems="center" mt="3em" mb="3em">
      <Image
        src="gibbresh.png"
        fallbackSrc="https://via.placeholder.com/250"
        alt="headshots"
        borderRadius="full"
        w="70%"
      />
      <Stack mt="6" spacing="3" gap={5}>
        <Heading size='md' textAlign="center">
          {name}
        </Heading>
        <Text>{bio}</Text>
      </Stack>
    </Stack>
  );
};

export default BioCards;
