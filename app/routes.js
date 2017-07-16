/* eslint flowtype-errors/show-errors: 0 */
import React from "react";
import { Switch, Route } from "react-router";
import App from "./containers/App";
import Pomodoro from "./containers/Pomodoro";

// The area called options could be fleshed out later, leaving it here so I don't forget
// <Navigation /> goes right under <App>
export default () =>
  <App>
    <Switch>
      <Route path="/" component={Pomodoro} />
    </Switch>
  </App>;
