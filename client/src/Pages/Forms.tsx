import { Box, Square, Text, Icon } from "@chakra-ui/react";
import GetInTouchForm from "../components/GetInTouchForm";
import LeadFormHero from "../components/LeadFormHero";
import { GrNotes } from "react-icons/gr";

const Forms = () => {
  return (
    <Box>
      <LeadFormHero />
      <Box ml="4em" py="3em">
        <a
          href="chain-of-custody/CLE-Chain-of-Custody-2024.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <Square className="form-card" size="200px" shadow="lg">
            <Icon boxSize="12em" display="flex" ml="4em" mt="4.2em">
              <GrNotes />
            </Icon>
          </Square>
        </a>

        <a
          href="chain-of-custody/CLE-Chain-of-Custody-2024.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <Text mt="1em" fontSize="1.3em">
            Lead Chain of Custody
          </Text>
        </a>
      </Box>
      <GetInTouchForm />
    </Box>
  );
};

export default Forms;
