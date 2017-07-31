// @flow
/* eslint-disable react/no-unused-prop-types */
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
  const { name, stopped, buttons } = task.active
    ? {
        name: "task-active-name",
        stopped: "task-active-stopped pad-task u-pull-right",
        buttons: "pad-task u-pull-right"
      }
    : {
        name: "task-name",
        stopped: "task-stopped pad-task u-pull-right",
        buttons: "pad-task u-pull-right"
      };

  return (
    <div className="container task-bottom-pad">
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

      {task.active
        ? <span className={buttons}>
            <i
              onClick={() => completeTask(task.name || "")}
              role="button"
              tabIndex="0"
              className="fa fa-check success"
            />
            <i
              onClick={() => deactivateTask(task.name || "")}
              role="button"
              tabIndex="0"
              className="fa fa-stop danger"
            />
          </span>
        : <span className={buttons}>
            <i
              onClick={() => activateTask(task.name || "")}
              role="button"
              tabIndex="0"
              className="fa fa-chevron-up success"
            />
            <i
              onClick={() => removeTask(task.name || "")}
              role="button"
              tabIndex="0"
              className="fa fa-times danger"
            />
          </span>}
    </div>
  );
};

export default Task;
