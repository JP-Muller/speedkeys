import React from "react";
import { Switch, Route } from "react-router-dom";
import Practice from "./Components/Practice";
import Dashboard from "./Components/Dashboard/Dashboard";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/practice" component={Practice} />>
  </Switch>
);
