import React from "react";
import AppRouter from "./routers/AppRouter";
import Container from "@material-ui/core/Container";

export default function App() {
  return (
    <Container align="center" maxWidth="lg" height="100%">
      <AppRouter />
    </Container>
  );
}
