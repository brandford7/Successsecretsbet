import React, { useEffect } from "react";
import "./App.css";
import {
  useColorModeValue,
  VStack,
  IconButton,
  useColorMode,
  Box,
  Flex,
  Spacer,
  HStack,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import UCL from "./Components/UCL";
import Matches from "./Components/Predictions";
import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Betoftheday from "./Components/Betoftheday";
import Livescore from "./Components/Livescore";
import OnexBet from "./Components/OnexBet";
import Buttonbox from "./Components/Buttonbox";
import Advert from "./Components/Advert";
import successicon from "./successicon.jpg";
import ReactGA from "react-ga";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("UA-181012576-1");
    ReactGA.pageview("/");
    ReactGA.pageview("/Betoftheday");
    ReactGA.pageview("/1xBET Tips");
  }, []);
  return (
    <Router>
      <VStack w={["100%", "100%", "100%"]} h="auto" bg="gray.900">
        <Box w="100%" mt="5" mb="10">
          <HStack mx="20">
            <Spacer />
            <a href="https://t.me/Successsecretbet">
              <IconButton colorScheme="blue" icon={<FaTelegram />} />
            </a>
            <a href="">
              <IconButton icon={<FaInstagram />} />
            </a>
            <a href="https://www.youtube.com/channel/UC9zkTKufmG2LTiaael9zovw/featured">
              <IconButton colorScheme="red" icon={<FaYoutube />} />
            </a>
          </HStack>

          <Advert />

          <VStack h="auto">
            <Stack
              direction="row"
              w="50%"
              mt="5"
              bg="gray"
              color="darkblue"
              mb="10"
              align="center"
              justify="center"
            >
              <Image src={successicon} boxSize="100px" rounded="full" alt="" />
              <Heading fontSize={["10px", "15px", "30px"]}>
                Success SecretBet
              </Heading>
            </Stack>
            <VStack align="center">
              <Stack
                direction={["column", "row"]}
                w="100%"
                align="center"
                justify="center"
              >
                <Link to="/">
                  <Buttonbox title="Champions League" />
                </Link>
                <Link to="/Betoftheday">
                  <Buttonbox title="Bet of the day" />
                </Link>
                <Link to="/1xBetpredictions">
                  <Buttonbox title="1xBET Tips" />
                </Link>
                <a href="https://flashscore.com" target="_blank">
                  <Buttonbox title="Livescore" />
                </a>
              </Stack>
            </VStack>
          </VStack>
        </Box>

        <Switch>
          <Route exact path="/">
            <UCL />
          </Route>
          <Route path="/Betoftheday">
            <Betoftheday />
          </Route>
          <Route path="/1xbetpredictions">
            <OnexBet />
          </Route>
          <Route path="/livescore">
            <Livescore />
          </Route>
        </Switch>
        <Spacer />
        <Stack bg="gray" w="100%" mt="50">
          <Footer />
        </Stack>
      </VStack>
    </Router>
  );
};

export default App;
