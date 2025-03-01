import { Box, Typography } from "@mui/material";
import { FaGithub, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function SessionThree() {
  const socials = [
    { name: "instagram", url: "https://www.instagram.com/matheus.freitax?igsh=cXdjcXNyZ25wMmk1&utm_source=qr", icon: <FaInstagram /> },
    { name: "linkedin", url: "http://linkedin.com/in/mgsoutodelira", icon: <FaLinkedin /> },
    { name: "github", url: "http://github.com/matheussfreitas", icon: <FaGithub /> },
    { name: "gmail", url: "mailto:mgsoutodelira@gmail.com", icon: <FaGoogle /> },
  ]
  return(
    <Box sx={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
      <Typography sx={{ fontSize: "1rem", fontWeight: "500", textAlign: "center", color: 'var(--texto)' }}>
        Vamos conectar!
      </Typography>
      <Box sx={{ 
        display: "flex",
        flexWrap: "row",
        justifyContent: "center",
        gap: "0.8rem",
        maxWidth: "300px",
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
              padding: "0.8rem", 
              border: "2px solid var(--ccc)",
              borderRadius: "1rem",  
              "& svg": { fontSize: "1.5rem", color: "var(--ccc)" },
              "&:hover": { backgroundColor: "var(--ccc)", border: " 2px solid var(--aaa)", transition: "0.5s", "& svg": {color: "#fff", transition: "0.5s", transform: "scale(1.2)" } } 
              }}>
                {item.icon}
            </Box>
          </Link>
          ))}
      </Box>
    </Box>
  )
}