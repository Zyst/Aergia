// @flow
import React from "react";
import Task from "../components/Task";
import type { taskStateType } from "../reducers/task";

type Props = {
  tasks: taskStateType,
  completeTask: (name: string) => void,
  removeTask: (name: string) => void,
  activateTask: (name: string) => void,
  deactivateTask: (name: string) => void
};

const Tasks = (props: Props) => {
  const { tasks, ...dispatches } = props;

  return (
    <div>
      {tasks.map(task => <Task key={task.name} task={task} {...dispatches} />)}
    </div>
  );
};

export default Tasks;
