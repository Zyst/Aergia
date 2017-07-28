// @flow
import React from "react";
import Timer from "../components/Timer";
import Add from "../containers/Add";
import TasksContainer from "../containers/TasksContainer";

const Pomodoro = () =>
  <div>
    <Timer minutes={25} break={5} />
    <Add />
    <TasksContainer />
  </div>;

export default Pomodoro;
