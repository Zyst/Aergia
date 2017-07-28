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
  const styles = task.active
    ? {
        name: "task-active-name"
      }
    : {
        name: "task-name"
      };

  return (
    <div className="container">
      <span className={styles.name}>
        {task.name}
      </span>

      <span className="u-pull-right">
        {task.currentProgress}/{task.totalPomodoros}
      </span>

      {!task.stopped
        ? <span className="task-stopped u-pull-right">
            Stopped {task.stopped} times
          </span>
        : ""}
    </div>
  );
};

export default Task;
