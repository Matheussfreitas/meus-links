import { Box, Typography } from "@mui/material";

export default function SessionThree() {
  const socials = [
    { name: "instagram", url: "http://instagram.com", icon: "" },
    { name: "linkedin", url: "http://linkedin.com", icon: "" },
    { name: "github", url: "http://github.com", icon: "" },
    { name: "gmail", url: "http://gmail.com", icon: "" },
  ]
  return(
    <Box>
      <Typography variant="h6">Onde me encontrar</Typography>
      <Box></Box>
    </Box>
  )
}