/* eslint flowtype-errors/show-errors: 0 */
import React from "react";
import { Switch, Route } from "react-router";
import App from "./containers/App";
import Navigation from "./containers/Navigation";
import HomePage from "./containers/HomePage";
import Pomodoro from "./containers/Pomodoro";
import CounterPage from "./containers/CounterPage";

// The area called options could be fleshed out later, leaving it here so I don't forget
export default () =>
  <App>
    <Navigation />
    <Switch>
      <Route path="/" component={Pomodoro} />
      <Route path="/options" component={Pomodoro} />
    </Switch>
  </App>;
