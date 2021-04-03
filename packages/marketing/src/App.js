import { StylesProvider } from "@material-ui/styles";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Pricing, Album as Landing } from "./components";

const App = () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};

export { App };
