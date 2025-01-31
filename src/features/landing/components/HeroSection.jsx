import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, keyframes } from "@mui/material";

const pulse = keyframes`
  0%   { transform: scale(1);   opacity: 0.7; }
  50%  { transform: scale(1.2); opacity: 0.3; }
  100% { transform: scale(1);   opacity: 0.7; }
`;

export default function HeroSection() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(
        window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0,
          backgroundAlpha: 0,
          color1: 0xff1493,
          color2: 0xff1493,
          birdSize: 1.5,
          wingSpan: 20.0,
          separation: 50.0,
          quantity: 5,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Box
      ref={vantaRef}
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: (theme) => `
      radial-gradient(
        circle at 20% 20%,
        ${theme.palette.secondary.main}30 50%,
        transparent 85%
      ),
      linear-gradient(
        180deg,
        ${theme.palette.background.default} 20%,
        ${theme.palette.background.paper} 100%
      )
    `,
        px: 4,
      }}
    >
      {/* Gradient */}

      <Box
        sx={{
          position: "absolute",
          width: "200%",
          height: "200%",
          top: "-50%",
          left: "-50%",
          background: (theme) => `
        radial-gradient(
          circle at 50% 50%,
          ${theme.palette.primary.main}30 0%,
          ${theme.palette.secondary.main}40 30%,
          ${theme.palette.primary.main}10 60%,
          transparent 70%
        )
      `,
          animation: `${pulse} 4s ease-in-out infinite`,
          zIndex: 0,
        }}
      />

      {/* Overlay layer */}

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent black overlay
          zIndex: 1, // Between background and content
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: 800,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            mb: 2,
            color: "text.primary",
          }}
        >
          Build your next landing page inseconds with AI
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: "text.secondary",
          }}
        >
          No code, no headaches.
          <br />
          Instantly generates beautiful, high-converting landing pages with AI-powered.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: 600,
            boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}40`,
            "&:hover": {
              transform: "translateY(-2px)",
              transition: "all 0.2s",
            },
          }}
        >
          Get Started Now
        </Button>
      </Box>
    </Box>
  );
}
