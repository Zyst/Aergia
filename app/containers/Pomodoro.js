// @flow
import React from "react";
import Timer from "../components/Timer";
import Add from "../containers/Add";
import Tasks from "../containers/Tasks";

const Pomodoro = () =>
  <div>
    <Timer minutes={25} break={5} />
    <Add />
    <Tasks />
  </div>;

export default Pomodoro;
