import React from 'react'
import { VStack,Icon,Heading,Stack } from '@chakra-ui/react';
import{GiFlame} from 'react-icons/gi'
import Boxify from './Boxify';

const OnexBet = () => {
    return (
      <VStack align="center" h="auto">
        <Heading mt="10" fontSize={["10px", "15px", "30px"]} color="white">
          <Icon color="orange" as={GiFlame} /> Hot Divisions on 1xBet
        </Heading>
        <a href="https://refpa.top/L?tag=d_540221m_97c_&site=540221&ad=97">
          <Stack spacing="5" direction={["column", "row"]}>
            <Boxify title="Division 4x4" />

            <Boxify title="Dragon League 6x6" />

            <Boxify title="Soccer Box 2x2" />

            <Boxify title="5X5 Bundesliga LFL" />
          </Stack>
        </a>
      </VStack>
    );
}

export default OnexBet
