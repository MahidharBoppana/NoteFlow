import { Button, Container, Typography } from "@mui/material";
import React from "react";

function LandingPage() {
  return (
    <Container className="py-10">
      <Typography variant="h1" gutterBottom>
        NoteFlow
      </Typography>

      <Typography variant="body1" className="mb-6">
        Modern rich-text notes application
      </Typography>

      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
}

export default LandingPage;
