import { Heading, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

type bioCardProps = {
  name: string;
  bio: string;
};

const BioCards = ({ name, bio }: bioCardProps) => {
  const mobileBioFont = useBreakpointValue({ base: '1.5em', sm: '1.5em', md: '1em', lg: '1em'});
  const headingFont = useBreakpointValue({ base: 'xl', sm: 'xl', md: 'md', lg: 'md'});
  const mobileGap = useBreakpointValue({ base: 4, sm: 4, md: 5, lg: 5});
  const mobileMargin = useBreakpointValue({ base: '2em', sm: '1.5em', md: '3em', lg: 'em'});
  const mobileTopMargin = useBreakpointValue({ base: '8', sm: '8', md: '6', lg: '6'});

  return (
    <Stack alignItems="center" mt={mobileMargin} mb="3em">
      <Image
        src="gibbresh.png"
        fallbackSrc="https://via.placeholder.com/250"
        alt="headshots"
        borderRadius="full"
        w="70%"
      />
      <Stack mt={mobileTopMargin} spacing="3" gap={mobileGap}>
        <Heading size={headingFont} textAlign="center">
          {name}
        </Heading>
        <Text fontSize={mobileBioFont}>{bio}</Text>
      </Stack>
    </Stack>
  );
};

export default BioCards;
