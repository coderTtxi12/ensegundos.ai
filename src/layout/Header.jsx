import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Header() {
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
        backgroundColor: 'transparent',
        boxShadow: 'none' // Remove shadow
      }}
    >
      <Toolbar>
        {/* Logo */}

        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            inseconds.ai
          </Typography>
        </Box>

        {/* Navigation links */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button sx={{ mr: 2, textTransform: "none" }}>Pricing</Button>
            <Button sx={{ mr: 2, textTransform: "none" }}>Login</Button>
          </Box>

          <Button
            variant="outlined"
            sx={{ textTransform: "none", borderRadius: 20 }}
          >
            Sign up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
