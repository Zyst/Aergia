// @flow
import React from "react";
import Timer from "../components/Timer";
import Add from "../containers/Add";
import Tasks from "../containers/Tasks";

const Pomodoro = () =>
  <div>
    <Timer />
    <Add active time={25} />
    <Tasks />
  </div>;

export default Pomodoro;
