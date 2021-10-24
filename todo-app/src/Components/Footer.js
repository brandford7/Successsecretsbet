import React from "react";
import { Stack, Text, Icon, VStack, Image, Square,IconButton } from "@chakra-ui/react";
import {
  FaCopyright,
  FaTelegram,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import successicon from '../successicon.jpg'

const Footer = () => {
  return (
    <VStack h="auto" w="auto" mt="20" w="100%">
      <Image src={successicon} boxSize="100px" rounded="full" alt="" />
      <Stack direction="row">
        <a href="https://t.me/Successsecretbet">
          <IconButton colorScheme="blue" icon={<FaTelegram />} />
        </a>
        <a href="">
          <IconButton icon={<FaInstagram />} />
        </a>
        <a href="https://www.youtube.com/channel/UC9zkTKufmG2LTiaael9zovw/featured">
          <IconButton colorScheme="red" icon={<FaYoutube />} />
        </a>
      </Stack>
      <Stack direction="row">
        <Stack direction="row" color="white">
          <Icon as={FaCopyright} />
          <Text>Success Secrets Bet 2021</Text>
        </Stack>
      </Stack>
    </VStack>
  );
};

export default Footer;
