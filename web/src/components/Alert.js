import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import Header from "./Header";

export default function AlertComponent({
  severity = "error",
  title,
  message = "Something went wrong!",
  showHeader,
}) {
  return (
    <>
      {showHeader && <Header />}
      <Alert severity={severity} data-testid="alert">
        {title && <AlertTitle data-testid="alert-title">{title}</AlertTitle>}
        {message}
      </Alert>
    </>
  );
}
