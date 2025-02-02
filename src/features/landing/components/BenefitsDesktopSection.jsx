import React from "react";
import { Box, Grid, Typography, Button, Fade } from "@mui/material";
import { glowButtonStyle } from "../../../styles/layoutStyles";
import useTransitions from "../hooks/useTransitions";

function BenefitsDesktopSection(props) {
  // Custom hook for transitions
  const transitions = useTransitions();
  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      sx={{
        mb: { md: 8 },
        py: 6, // Add vertical padding
      }}
      direction={{ md: props.reversed ? "row-reverse" : "row" }}
    >
      <Grid item md={6}>
        {/* Title */}

        <Box ref={transitions.fade.ref}>
          <Fade direction="up" in={transitions.fade.inView} timeout={1000}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  color: "primary.main",
                  mb: 1,
                  display: "block",
                  textAlign: {
                    xs: "center",
                    sm: "left",
                  },
                }}
              >
                {props.title}
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Subtitle */}

        <Box ref={transitions.fade.ref}>
          <Fade direction="up" in={transitions.fade.inView} timeout={1000}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  color: "text.primary",
                  textAlign: {
                    sm: "left",
                  },
                }}
              >
                {props.subtitle}
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Description */}

        <Box ref={transitions.fade.ref}>
          <Fade direction="up" in={transitions.fade.inView} timeout={1000}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "text.secondary",
                  mb: 4, // Increased spacing
                  textAlign: {
                    sm: "left",
                  },
                  lineHeight: 1.6, // Improved readability
                }}
              >
                {props.description}
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Call-to-action button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={glowButtonStyle}
        >
          Get Started Now
        </Button>
      </Grid>

      <Grid item md={6}>
        <Box ref={transitions.fade.ref}>
          <Fade direction="up" in={transitions.fade.inView} timeout={1000}>
            <Box>
              <Box
                component="img"
                src={props.image}
                alt={props.alt}
                sx={{
                  width: "100%",
                  height: "100%", // Make it square
                  aspectRatio: "1/1", // Force square aspect ratio
                  objectFit: "cover",
                  borderRadius: 4,
                  boxShadow: 3, // Added shadow for depth
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)", // Subtle zoom on hover
                  },
                }}
              />
            </Box>
          </Fade>
        </Box>
      </Grid>
    </Grid>
  );
}

export default BenefitsDesktopSection;
