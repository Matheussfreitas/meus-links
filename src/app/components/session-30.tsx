import { Box, Icon, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

import Link from "next/link";

export default function SessionThreeOne() {
  const socials = [
    { name: "instagram", url: "https://www.instagram.com/matheus.freitax?igsh=cXdjcXNyZ25wMmk1&utm_source=qr", icon: <InstagramIcon /> },
    { name: "linkedin", url: "http://linkedin.com/in/mgsoutodelira", icon: <LinkedInIcon /> },
    { name: "github", url: "http://github.com/matheussfreitas", icon: <GitHubIcon /> },
    { name: "gmail", url: "mailto:mgsoutodelira@gmail.com", icon: <GoogleIcon /> },
  ]
  return(
    <Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Onde me encontrar
      </Typography>
      <Box sx={{ 
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
        maxWidth: "300px",
        marginTop: "20px",
        marginX: "auto",
        }}>
          {socials.map(item => (
          <Link key={item.name} href={item.url} target="_blank">
            <Box sx={{ 
              width: "80px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer", 
              padding: "20px", 
              border: "solid",
              borderRadius: "10px", 
              "& svg": { fontSize: "45px" }, 
              }}>
                {item.icon}
            </Box>
          </Link>
          ))}
      </Box>
    </Box>
  )
}