import React from "react";
import { Switch, Route } from "react-router-dom";
import Practice from "./Components/Game/Practice";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/practice" component={Practice} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </Switch>
);
