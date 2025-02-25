import { Avatar, Box, Icon, Typography } from "@mui/material";
import { FaCode } from "react-icons/fa";

export default function SessionOne() {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: "8px",
      padding: "10px",
      width: "380px",
      marginTop: "1.2rem"
    }}>
      <Box sx={{
        width: "300px",
        maxWidth: "380px",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        gap: "10px",
      }}>
        <Box sx={{ border: "solid var(--azul-oceano)", borderRadius: "50%" }}>
          <Avatar variant="circular" 
          sx={{ 
            backgroundColor: "var(--laranja-suave)",
            width: "80px",
            height: "80px",
            }}
            >
              M
            </Avatar>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
        }}>
          <Typography>Desenvolvedor Web</Typography>
          <Typography>Apaixonado por Surf</Typography>
        </Box>
      </Box>
    </Box>
  )
}