"use client";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function SessionFour() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box sx={{ textAlign: "center", maxWidth: "350px", width: "100%" }}>
      <Typography sx={{ marginBottom: "10px", fontSize: "1rem", fontWeight: "500", color: 'var(--texto)' }}>
        Estou escutando...
      </Typography>

      {isClient && ( 
        <Box>
          <iframe
            style={{ borderRadius: "12px", width: "100%" }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EQpj7X7UK8OOF?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Box>
      )}
    </Box>
  );
}
