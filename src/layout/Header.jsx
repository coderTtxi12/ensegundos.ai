import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { containerStyleToolbar } from "../styles/layoutStyles";
import { useHeaderTransform } from "../hooks/useHeaderTransform";

function Header() {

  // Custom hook for header scroll effect
  const scrolled = useHeaderTransform(10);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        left: 0,
        right: 0,
        top: 0,
        mx: "auto", // Margin-left: auto; Margin-right: auto
        width: "100%",
        backgroundColor: scrolled
          ? (theme) => `${theme.palette.background.semiTransparent}`
          : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none", // Safari support
        transition: "background-color 0.3s ease-in-out",
        boxShadow: "none", // Remove shadow
      }}
    >
      {/* Container style for consistent layout */}

      <Toolbar sx={containerStyleToolbar}>
        {/* Logo */}

        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "text.primary" }}
          >
            inseconds.ai
          </Typography>
        </Box>

        {/* Navigation links */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}>
            <Button
              sx={{ mr: 2, textTransform: "none", color: "text.primary" }}
            >
              Pricing
            </Button>
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              textTransform: "none",
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            Get Started
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
