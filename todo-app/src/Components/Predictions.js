import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Divider,
  Heading,
  Image,
  Spacer,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { requests } from "../requests";
import { Images } from "../Images";

const Predictions = ({ title, match, bet, outcome }) => {
  return (
    <VStack align="center" w={["100%", "100%", "100%"]}>
      <Heading fontSize="20px" mt="10" spacing="20">
        {title}
      </Heading>
      <Box
        borderRadius="0"
        align="center"
        fontWeight="bold"
        fontSize={["10px", "12px", "15px"]}
      >
        <Stack direction="row" spacing="20" mt="5">
          
          <Box>{match}</Box>

          <Box>{bet}</Box>

          <Box
            as="button"
            color={
              outcome === "H"
                ? "green"
                : outcome === "D"
                ? "brown"
                : outcome === "A"
                ? "red"
                : "yellow"
            }
            borderRadius="md"
            borderColor="red"
            w="100%"
            bg="black"
            h='20px'
          >
            {outcome}
          </Box>
        </Stack>
      </Box>
    </VStack>
  );
};

export default Predictions;
