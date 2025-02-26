import { Box, Typography } from "@mui/material";
import SessionOne from "./components/session-1";
import SessionTwo from "./components/session-2";
import SessionThree from "./components/session-3";
import SessionFour from "./components/session-4";

export default function Home() {
  return (
    <Box sx={{
      maxWidth: "400px",
      margin: 'auto',
      marginTop: "2rem",
      backgroundColor: "var(--verde)",
      borderRadius: '1rem',
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "column",
      gap: "1.2rem",
      paddingY: '10px',
    }}>
      <SessionOne />
      <SessionTwo />
      <SessionThree />
      <SessionFour />
    </Box>
  );
}
