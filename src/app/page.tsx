import { Box, Typography } from "@mui/material";
import { Roboto } from "next/font/google"
import SessionOne from "./components/session-1";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Home() {
  return (
    <Box sx={{
      maxWidth: 400,
      margin: 'auto',
      border: '1px solid #fff',
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "column",
    }}>
      <Typography variant="h6">Meus Links</Typography>
      <SessionOne />
    </Box>
  );
}
