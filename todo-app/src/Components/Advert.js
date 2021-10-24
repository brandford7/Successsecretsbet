import React from "react";
import { Square, Image,Stack } from "@chakra-ui/react";
import advert from "../advert.png.gif";

const Advert = () => {
  return (
    <Stack justify="center" spacing="2" align="center">
      <Square overflow="none">
        <iframe
          style={{
            padding: "0px",
            margin: "0px",
            border: "0px",
            overflow: "hidden",
            width: "728",
            height: "90",
          }}
          src="https://refbanners.com/I?tag=d_540221m_47165c_&site=540221&ad=47165"
        ></iframe>
        
      </Square>
    </Stack>
  );
};

export default Advert;
