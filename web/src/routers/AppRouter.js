import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PhotoPage from "../pages/PhotoPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter({ state }) {
  const [photoState, setPhotoState] = React.useState({});

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/photo" exact>
          <PhotoPage uri={photoState} />
        </Route>
        <Route path="/" exact>
          <HomePage state={state} setPhotoState={setPhotoState} />
        </Route>
        <Route>
          <NotFoundPage showHeader />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
