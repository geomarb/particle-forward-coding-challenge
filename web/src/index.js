import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function renderApp({ error, state, isLoading }) {
  ReactDOM.render(
    <App error={error} state={state} isLoading={isLoading} />,
    document.getElementById("root")
  );
}

renderApp({ isLoading: true });

fetch(process.env.REACT_APP_API_URL)
  .then((res) => res.json())
  .then((state) => renderApp({ state }))
  .catch((error) => renderApp({ error }));
