import { Box, Icon, Typography } from "@mui/material";
import { FaJava, FaNode, FaReact } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";

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
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <Typography sx={{ fontSize: "1rem", fontWeight: "500", textAlign: "center",}}>
          Tecnologias
        </Typography>
        <Box sx={{ 
          display: "flex", 
          flexDirection: "row",  
          justifyContent: "space-around" 
          }}>
          {icons.map( icon => (
            <Box key={icon.stack} sx={{ 
              maxWidth: "300px", 
               }}>
              <Icon sx={{ 
                cursor: "pointer",
                "&:hover": { color: "#fff", transform: "scale(1.2)", transition: "0.5s" } }}>
                {icon.icon}
              </Icon>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}