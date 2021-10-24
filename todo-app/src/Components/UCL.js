import React from "react";
import {
  Stack,
  Heading,
  VStack,
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  Spacer,
  Flex,
  Image,
  Text,
  Square,
  Divider,
} from "@chakra-ui/react";
import Buttonbox from "./Buttonbox";

import Predictions from "./Predictions";
import Footer from "./Footer";
import { Images } from "../Images";
import { Link } from "react-router-dom";

const UCL = () => {
  
  
  return (
    <>
      <VStack align="center" h="auto" bg="gray.900">
        <Heading color="white">
          Predictions for the next Champions League fixtures will be uploaded
          soon
        </Heading>
        {/*
        <Stack direction="row">
        <Image
          boxSize="50px"
          src="https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-25/256/UEFA-Champions-League-1-icon.png"
        />
        <Heading font-weight="bold" fontSize="30px" color="white">
          Uefa Champions League Tips
        </Heading>
      </Stack>

      <Divider orientation="horizontal" colorScheme="red" />
      <Square color="white" borderRadius="md">
        <Stack direction="column" align="center" mr="5">
          <Predictions match="Club Brugge vs Man City" bet="Man City win" />
          <Divider orientation="horizontal" color="teal" />
          <Predictions
            match="ATL vs Liverpool "
            bet="Liverpool win either half "
          />
          <Divider orientation="horizontal" />
          <Predictions
            match="Inter Milan vs Fc Sherrif"
            bet="Inter win 2nd half"
          />
          <Divider orientation="horizontal" />
          <Predictions
            match="Ajax vs Dortmund"
            bet="(0:2) Dortmund win"
            outcome="A"
          />
          <Divider orientation="horizontal" />
          <Predictions
            match="PSG vs RB Leipzig"
            bet="PSG win and TO 1.5"
            outcome="H"
          />
          <Divider orientation="horizontal" />
          <Predictions
            match="Porto vs Milan "
            bet="Milan total TO 1.5"
            outcome="A & o1.5"
          />
          <Divider orientation="horizontal" />
          <Predictions
            match="Shaktar Donetsk vs Real Madrid"
            bet="2nd half 12 + TU 4.5 yes"
            odd="1.51"
            outcome="D"
          />
          <Divider orientation="horizontal" />
          <Predictions
            match="Besiktas vs Sporting CP"
            bet="home or way win"
            outcome="A"
          />
        </Stack>
      </Square>
      <Divider orientation="horizontal" />
  */}
      </VStack>
    </>
  );
};

export default UCL;
