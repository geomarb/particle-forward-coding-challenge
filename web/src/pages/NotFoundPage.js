import React from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import Alert from "../components/Alert";

export default function NotFoundPage() {
  const history = useHistory();

  return (
    <>
      <Alert
        severity="warning"
        title="Page not found!"
        message="The page you are trying to access does not exists. Please go to our home page."
        showHeader
      />
      <Box mt={5}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/")}
          data-testid="button"
        >
          Take me to the Home Page
        </Button>
      </Box>
    </>
  );
}
