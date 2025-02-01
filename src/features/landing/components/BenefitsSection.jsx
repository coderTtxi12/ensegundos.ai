import React from "react";
import { Box, Typography } from "@mui/material";
import BenefitsMobileSection from "./BenefitsMobileSection";
import BenefitsDesktopSection from "./BenefitsDesktopSection";
import benefitsDb from "../data/landingDb";

function BenefitsSection() {
  return (
    <>
      {/* Desktop version: hidden on small screens */}

      <Box
        sx={{
          px: 4,
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            pb: 8,
            mb: 0,
            textAlign: "center",
          }}
        >
          Typeform helps you understand customers
        </Typography>

        {benefitsDb.map((benefit, index) => {
          // Reverse the order of the benefits on every odd index
          let reversed = index % 2 === 0 ? false : true;

          return (
            <BenefitsDesktopSection
              key={benefit.id}
              id={benefit.id}
              title={benefit.title}
              subtitle={benefit.subtitle}
              image={benefit.image}
              alt={benefit.alt}
              description={benefit.description}
              reversed={reversed}
            />
          );
        })}
      </Box>

      {/* Mobile version: shown only on small screens */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Typography
          variant="h4"
          sx={{
            mb: 0,
            textAlign: "center",
          }}
        >
          Typeform helps you understand customers
        </Typography>
        {benefitsDb.map((benefit) => {
          return (
            <BenefitsMobileSection
              key={benefit.id}
              id={benefit.id}
              title={benefit.title}
              subtitle={benefit.subtitle}
              image={benefit.image}
              alt={benefit.alt}
              description={benefit.description}
            />
          );
        })}
      </Box>
    </>
  );
}

export default BenefitsSection;
