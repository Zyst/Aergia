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
}: Props) => {
  const { name, stopped } = task.active
    ? {
        name: "task-active-name",
        stopped: "task-active-stopped u-pull-right"
      }
    : {
        name: "task-name",
        stopped: "task-stopped u-pull-right"
      };

  return (
    <div className="container">
      <span className={name}>
        {task.name}
      </span>

      <span className="u-pull-right">
        {task.currentProgress}/{task.totalPomodoros}
      </span>

      {task.stopped
        ? <span className={stopped}>
            Stopped {task.stopped} times
          </span>
        : ""}
    </div>
  );
};

export default Task;
