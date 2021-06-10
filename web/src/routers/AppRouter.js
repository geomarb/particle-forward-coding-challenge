import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PhotoPage from "../pages/PhotoPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/photo" component={PhotoPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
