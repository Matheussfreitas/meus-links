'use client'
import { Avatar, Box, Switch, Typography } from "@mui/material";
import DecryptedText from "./decrypted-text/DecryptedText";
import Image from "next/image";
import { useTheme } from "./theme-context/ThemeContext";


export default function SessionOne() {
  const {darkMode, toggleDarkMode} = useTheme();

  return (
    <Box sx={{
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: "8px",
      width: "380px",
    }}
    >
      <Box sx={{
        width: "300px",
        maxWidth: "380px",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        gap: "0.8rem",
      }}
      >
        <Box sx={{ 
          position: "relative",
          borderRadius: "50%",
          "&::before, &::after": {
            zIndex: "-1",
            content: "''",
            position: "absolute",
            width: "calc(100% + 6px)",
            height: "calc(100% + 6px)",
            background: "linear-gradient(45deg, var(--cinza), var(--aaa), var(--cinza))",
            borderRadius: "50%",
            top: "-2.45%",
            left: "-2.45%",
            animation: "rotate 5s linear infinite",
          },
        }}
        >
          <Avatar variant="circular"
            sx={{
              backgroundColor: "var(--background)",
              width: "120px",
              height: "120px",
            }}
          >
            <Image src="/perfil.jpg" alt="code" width={120} height={120} />
          </Avatar>
        </Box>

        <Switch checked={darkMode} onChange={toggleDarkMode} size="small" color="default"/>

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
        >
          <Typography sx={{ fontWeight: "500", fontSize: "1.1rem", textShadow: "0px 0px 1px rgba(0,0,0,0.2)" }}>
            <DecryptedText text="Matheus Freitas" speed={110} sequential={true} animateOn="view" />
          </Typography>
          <Typography sx={{ fontWeight: "500", fontSize: "1rem", color: 'var(--texto)' }}>
            <DecryptedText text="Desenvolvedor Web Full-Stack" speed={120} sequential={true} animateOn="view" />
          </Typography>
        </Box>
      </Box>

      <style jsx>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Box>
  )
}