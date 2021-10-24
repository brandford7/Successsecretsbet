import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Buttonbox = ({ title }) => {
  
  return (
    <div>
      <Box as="button" h='50px' w={['100px','110px','150px']} fontSize={['sm','sm','md']} borderRadius="md" bg="blue" color='whatsapp.100'>
        {title}
      </Box>
    </div>
  );
};

export default Buttonbox;
