import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function Header() {
  return (
    <Box
      bgcolor="primary.main"
      color="primary.contrastText"
      p={1}
      mb={5}
      data-testid="header"
    >
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        data-testid="header-text"
      >
        Car Photos
      </Typography>
    </Box>
  );
}
