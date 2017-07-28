// @flow
import React from "react";
import Task from "../components/Task";
import type { taskStateType } from "../reducers/task";

type Props = {
  tasks: taskStateType
};

const Tasks = ({ tasks }: Props) =>
  <div>
    {tasks.map(task => <Task task={task} />)}
  </div>;

export default Tasks;
