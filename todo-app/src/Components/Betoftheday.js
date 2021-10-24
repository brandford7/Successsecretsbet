import React from "react";
import {
  VStack,
  Square,
  Box,
  Stack,
  Image,
  Heading,
  Divider,
  Text,
} from "@chakra-ui/react";
import Predictions from "./Predictions";

const Betoftheday = () => {
  return (
    <VStack h="auto">
      <Square color="white" borderRadius="md">
        <VStack align="center" mr="5">
          <Stack direction="row">
            <Image
              boxSize="50px"
              src="https://png.pngtree.com/png-vector/20191201/ourmid/pngtree-soccer-ball-icon-circle-png-image_2060796.jpg"
              rounded="full"
            />
            <Heading font-weight="bold" fontSize="30px" color="white">
              Bet of the day
            </Heading>
          </Stack>
          <Divider orientation="horizontal" colorScheme="red" />
          <Heading mt="10">1st Accumulator</Heading>
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions
            match="Brentford vs Leicester City"
            outcome="A Over 0.5"
          />
          <Divider orientation="horizontal" color="teal" />
          <Predictions match="West Ham vs Tottenham" outcome="H/A" />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions
            match="Sevilla vs Levante"
            outcome="H to win either half"
          />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Barcelona vs Real Madrid" outcome="A Over 0.5" />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Roma vs Napoli" outcome="2nd Half Over 0.5" />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Inter Milan vs Juventus" outcome="H/A" />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions
            match="Stade Rennais vs Strasbourg"
            outcome="H Over 0.5"
          />
          <Divider orientation="horizontal" colorScheme="red" />

          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions
            match="Marseille vs PSG"
            outcome="A to win either half"
          />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Ajax vs PSV" outcome="2nd Half H/A" />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Red Bull Salzburg vs Sturm Graz" outcome="H" />

          <Text>1xbet code: QCSR3</Text>
          {/* <Divider orientation="horizontal" colorScheme="red" />
          <Heading mt="10">Specials</Heading>
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Arsenal vs Aston Villa" outcome="H/A" />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Mainz 05 vs Augsburg" outcome="Over 1.5" />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Sampdoria vs Spezia" outcome=" 1st Half over 0.5" />
          <Predictions
            match="Slovan Bratislava vs Lincoln Red Imps"
            outcome="2nd Half H/A"
          />
  <Text>1xbet code: UJBMF</Text> */}
          <Divider orientation="horizontal" colorScheme="red" />
          <Heading mt="10">2nd Accumulator</Heading>
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions
            match="West Ham vs Tottenham"
            outcome=" 2nd Half Over 0.5"
          />

          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions
            match="Manchester United vs Liverpool"
            outcome="A Over 0.5"
          />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Sevilla vs Levante" outcome="H/A" />

          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions
            match="Barcelona vs Real Madrid"
            outcome="Both Halves Over 0.5"
          />

          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Inter Milan vs Juventus" outcome="H/D" />
          <Divider orientation="horizontal" colorScheme="red" />

          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Atalanta vs Udinese" outcome="H/A" />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions
            match="Zenit St. Petersburg vs Spartak Moscow"
            outcome="H to win either half"
          />

          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Ajax vs PSV" outcome="H" />

          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Dinamo Zagreb vs NK Istra" outcome="H" />
          <Text>1xbet code: 5VE73</Text>

          <Divider orientation="horizontal" colorScheme="red" />

          <Heading mt="10">3rd Accumulator</Heading>
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions
            match="Manchester United vs Liverpool"
            outcome="H/A and total Over 1.5"
          />

          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions
            match="Nottingham Forest vs Fulham"
            outcome="H/A and total Over 1.5"
          />

          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Sevilla vs Levante" outcome="H" />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Barcelona vs Real Madrid" outcome="A/D" />
          <Divider orientation="horizontal" colorScheme="red" />

          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Nice vs Lyon" outcome="H/A and total Over 1.5" />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions
            match="Marseille vs PSG"
            outcome="H/A and total Under 5.5"
          />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Ajax vs PSV" outcome="H" />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions
            match="Royal Antwerp vs Club Brugge"
            outcome="2nd Half H/A"
          />
          <Divider orientation="horizontal" colorScheme="red" />
          <Predictions match="Roma vs Napli" outcome="2nd Half H/A" />
          <Text>1xbet code: 12Y1G</Text>
        </VStack>
      </Square>

      <Divider orientation="horizontal" color="teal" w="100%" />
    </VStack>
  );
};

export default Betoftheday;
