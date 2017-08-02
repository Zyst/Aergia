// @flow
import React from "react";
import TimerContainer from "./TimerContainer";
import Add from "../containers/Add";
import TasksContainer from "../containers/TasksContainer";

const Pomodoro = () =>
  <div>
    <TimerContainer />
    <Add />
    <TasksContainer />
  </div>;

export default Pomodoro;
