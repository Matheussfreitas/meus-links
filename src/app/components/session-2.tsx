import { Box, Icon, Typography } from "@mui/material";
import Image from "next/image";
import { SiJavascript, SiTypescript, SiNextdotjs, SiMongodb } from "react-icons/si";
import { FaJava, FaReact, FaNode } from "react-icons/fa";

export default function SessionTwo() {
  const icons = [
    { stack: "JavaScript", icon: <SiJavascript /> },
    { stack: "TypeScript", icon: <SiTypescript /> },
    { stack: "ReactJS", icon: <FaReact /> },
    { stack: "NextJS", icon: <SiNextdotjs /> },
    { stack: "NodeJS", icon: <FaNode /> },
    { stack: "Java", icon: <FaJava /> },
    { stack: "MongoDB", icon: <SiMongodb /> },

  ];
  return(
    <Box sx={{  
      width: "100%",
      maxWidth: "300px",
      borderRadius: "8px",
      }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px"}}>
        <Typography sx={{ fontSize: "1rem", fontWeight: "500", textAlign: "center", color: "var(--texto)"}}>
          Tecnologias
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
               }}>
              <Icon sx={{ cursor: "pointer" }}>
                {icon.icon}
              </Icon>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}