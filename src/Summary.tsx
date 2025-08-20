import { Stack, Typography } from "@mui/material";
import React from "react";
import { ReactTyped } from "react-typed";

const Summary = () => {
  return (
    <Stack gap={2} alignItems={"start"} width={"100%"} height="250px">
      <Typography variant="h6">Hi, I'm Gideon.</Typography>
      <ReactTyped
        strings={[
          "With a knack for distilling large, complex datasets into intuitive, user flows, I've built performant and elegant web applications for innovative startup companies\
        in industries spanning biotech, logistics, clean energy and AI.<br><br>\
         I'm passionate about leading frontend and fullstack efforts at mission driven companies that have a positive impact on the world.<br><br>\
        When I'm not coding, you may spot me on a biking around a city or catching waves on my surfboard or spending time with my family.",
        ]}
        typeSpeed={5}
        backSpeed={10}
        className="text-xl text-gray-600"
        style={{ fontSize: "1rem", fontFamily: "Arial" }}
        showCursor={false}
      />
    </Stack>
  );
};

export default Summary;
