import { Box } from "@mui/material";
import "./App.css";
import Headshot from "./Headshot";
import Summary from "./Summary";
import Skills from "./Skills";
import Links from "./Links";
import GlassCard from "./components/GlassCard";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack padding={4} gap={2} direction="row" flexWrap="wrap">
      <GlassCard>
        <Headshot />
        <Summary />
        <Stack alignSelf="start" marginLeft={"-16px"}>
          <Links />
        </Stack>
      </GlassCard>
      <Box flex={1} minWidth={150}>
        <GlassCard>
          <Skills />
        </GlassCard>
      </Box>
      {/* <Contact /> */}
    </Stack>
  );
}

export default App;
