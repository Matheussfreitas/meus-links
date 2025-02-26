import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function SessionTwo() {
  const icons = [
    { stack: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { stack: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { stack: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { stack: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { stack: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
    { stack: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { stack: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },

  ];
  return(
    <Box sx={{  
      width: "100%",
      maxWidth: "300px",
      borderRadius: "8px",
      }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px"}}>
        <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", color: "var(--texto)"}}>
          Minha Stack
        </Typography>
        <Box sx={{ 
          marginTop: "10px",
          display: "flex", 
          flexDirection: "row",  
          justifyContent: "space-around" 
          }}>
          {icons.map( icon => (
            <Box key={icon.stack} sx={{ 
              maxWidth: "300px", 
              filter: "grayscale(80%)", 
              "&:hover": { filter: "none", transition: "0.3s" } }}>
              <Image src={icon.icon} alt={icon.stack} width={25} height={25} 
              style={{ cursor: "pointer" }} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}