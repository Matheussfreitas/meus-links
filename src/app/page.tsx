import { Box, Typography } from "@mui/material";
import SessionOne from "./components/session-1";
import SessionTwo from "./components/session-2";
import SessionThree from "./components/session-3";
import SessionFour from "./components/session-4";
import Waves from './components/waves/Waves';

export default function Home() {
  return (
    <Box sx={{ width: "100%", height: "100vh", backgroundColor: "#000", zIndex: "0", position: "absolute", inset: "0", display: "flex", alignItems: "center" }}>
      <Waves
        lineColor="var(--aaa)"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <Box sx={{
        zIndex: "2",
        position: "relative",
        maxWidth: "400px",
        margin: 'auto',
        backgroundColor: "var(--verde)",
        borderRadius: '1rem',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        gap: "1.5rem",
        paddingY: "2rem",
      }}>
        <SessionOne />
        <SessionTwo />
        <SessionThree />
        <SessionFour />
      </Box>
    </Box>
  );
}
