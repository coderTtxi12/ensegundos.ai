import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

function BenefitsDesktopSection(props) {
  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      sx={{ mb: { md: 8 } }}
      // On large screens, reverse the row if reversed===true, this makes the image appear on the left
      direction={{ md: props.reversed ? "row-reverse" : "row" }}
    >
      {/* Layout for desktop */}

      <Grid item md={6}>
        {/* T1 */}

        <Typography
          variant="h6"
          sx={{
            color: "primary.main",
            mb: 1,
            display: "block",
            textAlign: {
              xs: "center", // Center on small screens
              sm: "left", // Left-align on larger screens
            },
          }}
        >
          {props.title}
        </Typography>

        {/* T2 */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            textAlign: {
              sm: "left", // Left-align on larger screens
            },
          }}
        >
          {props.subtitle}
        </Typography>

        {/* T3 */}
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            mb: 3,
            textAlign: {
              sm: "left", // Left-align on larger screens
            },
          }}
        >
          {props.description}
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: 20, textTransform: "none" }}
        >
          Sign up
        </Button>
      </Grid>

      {/* Image */}

      <Grid item md={6}>
        <Box
          component="img"
          src={props.image}
          alt={props.alt}
          sx={{
            width: "100%",
            borderRadius: 2,
          }}
        />
      </Grid>
    </Grid>
  );
}

export default BenefitsDesktopSection;
