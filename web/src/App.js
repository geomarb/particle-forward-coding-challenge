import React from "react";
import AppRouter from "./routers/AppRouter";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "./components/Alert";
import Header from "./components/Header";

export default function App({ error, state, isLoading }) {
  return (
    <Container align="center" maxWidth="lg" height="100%">
      {error ? (
        <Alert
          title="Oops! Something went wrong!"
          message="Please try again later or contact our support!"
          showHeader
        />
      ) : isLoading ? (
        <>
          <Header />
          <CircularProgress data-testid="loading" />
        </>
      ) : (
        <AppRouter state={state} />
      )}
    </Container>
  );
}
