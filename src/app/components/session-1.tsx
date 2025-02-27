import { Avatar, Box, Typography } from "@mui/material";


export default function SessionOne() {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: "8px",
      width: "380px",
    }}>
      <Box sx={{
        width: "300px",
        maxWidth: "380px",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        gap: "0.8rem",
      }}>
        <Box sx={{ border: "solid var(--contorno)", borderRadius: "50%" }}>
          <Avatar variant="circular" 
          sx={{ 
            backgroundColor: "var(--background)",
            width: "90px",
            height: "90px",
            }}
            >
              M
            </Avatar>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}>
          <Typography sx={{ fontWeight: "500", fontSize: "1.1rem", color: 'var(--texto)', textShadow: "0px 0px 1px rgba(0,0,0,0.2)" }}>
            Desenvolvedor Web
          </Typography>
          <Typography sx={{ fontWeight: "500", fontSize: "1rem", color: 'var(--texto)' }}>
            Respirando código e marésia
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}