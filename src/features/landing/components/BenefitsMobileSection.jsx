import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

function BenefitsMobileSection(props) {
  return (
    <>
      {/* Layout for mobile */}

      <Grid container spacing={2} pt={8}>
        {/* T1 */}
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{ color: "primary.main", textAlign: "center" }}
          >
            {props.title}
          </Typography>
        </Grid>

        {/* T2 */}
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {props.subtitle}
          </Typography>
        </Grid>

        {/* Image */}
        <Grid item xs={12}>
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

        {/* T3 */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {props.description}
          </Typography>
        </Grid>

        {/* Button */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            sx={{ borderRadius: 20, textTransform: "none" }}
          >
            Sign up
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default BenefitsMobileSection;
