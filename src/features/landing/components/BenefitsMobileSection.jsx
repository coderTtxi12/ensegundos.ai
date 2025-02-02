import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { glowButtonStyle } from "../../../styles/layoutStyles";

function BenefitsMobileSection(props) {
  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              textAlign: "center",
              fontWeight: 600,
              mb: 1,
            }}
          >
            {props.title}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 2,
            }}
          >
            {props.subtitle}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box
            component="img"
            src={props.image}
            alt={props.alt}
            sx={{
              width: "100%",
              borderRadius: 2,
              boxShadow: (theme) =>
                `0 8px 24px ${theme.palette.primary.main}20`,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              mb: 4,
            }}
          >
            {props.description}
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              ...glowButtonStyle,
              minWidth: 200,
            }}
          >
            Get Started Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BenefitsMobileSection;
