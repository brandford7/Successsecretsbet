import React from "react";
import { Box, Square, Stack } from "@chakra-ui/react";

const Boxify = ({ title }) => {
    return (
        <Square
            as="button"
            bgGradient="linear(to-r, green.200, blue.500)"
            size={["200px",'100px','150px']}
      fontWeight="bold" color='white'
    >
      {title}
    </Square>
  );
};

export default Boxify;
