// @flow
import React from "react";

type Props = {
  task: {
    name?: string,
    currentProgress?: number,
    totalPomodoros?: number,
    stopped?: number,
    active?: boolean
  },
  completeTask: (name: string) => void,
  removeTask: (name: string) => void,
  activateTask: (name: string) => void,
  deactivateTask: (name: string) => void
};

const Task = ({
  task,
  completeTask,
  removeTask,
  activateTask,
  deactivateTask
}: Props) =>
  <div>
    <h2>
      {task.name}
    </h2>
  </div>;

export default Task;
