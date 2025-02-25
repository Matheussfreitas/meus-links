import { Box, Typography } from "@mui/material";
import SessionOne from "./components/session-1";
import SessionTwo from "./components/session-2";
import SessionThree from "./components/session-3";

export default function Home() {
  return (
    <Box sx={{
      maxWidth: "450px",
      margin: 'auto',
      marginTop: "30px",
      backgroundColor: "var(--cinza-claro)",
      borderRadius: '16px',
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "column",
      gap: "10px",
      paddingY: '10px',
    }}>
      <SessionOne />
      <SessionTwo />
      <SessionThree />
    </Box>
  );
}
