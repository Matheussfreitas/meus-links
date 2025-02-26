import { Box, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

import Link from "next/link";

export default function SessionThree() {
  const socials = [
    { name: "instagram", url: "https://www.instagram.com/matheus.freitax?igsh=cXdjcXNyZ25wMmk1&utm_source=qr", icon: <InstagramIcon /> },
    { name: "linkedin", url: "http://linkedin.com/in/mgsoutodelira", icon: <LinkedInIcon /> },
    { name: "github", url: "http://github.com/matheussfreitas", icon: <GitHubIcon /> },
    { name: "gmail", url: "mailto:mgsoutodelira@gmail.com", icon: <GoogleIcon /> },
  ]
  return(
    <Box>
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold", textAlign: "center", color: 'var(--texto)' }}>
        Vamos conectar!
      </Typography>
      <Box sx={{ 
        display: "flex",
        flexWrap: "row",
        justifyContent: "center",
        gap: "0.5rem",
        maxWidth: "300px",
        marginTop: "10px",
        marginX: "auto",
        }}>
          {socials.map(item => (
          <Link key={item.name} href={item.url} target="_blank">
            <Box sx={{ 
              width: "30px",
              height: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer", 
              padding: "1rem", 
              border: "solid #1A365D",
              borderRadius: "1rem",  
              "& svg": { fontSize: "35px", color: "var(--contorno)" },
              "&:hover": { backgroundColor: "var(--contorno)", border: "solid var(--background)", "& svg": {color: "#fff", transition: "0.5s"}, transition: "0.5s" } 
              }}>
                {item.icon}
            </Box>
          </Link>
          ))}
      </Box>
    </Box>
  )
}