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

  const activeTasks = tasks.filter(task => task.active);
  const inactiveTasks = tasks.filter(task => !task.active);

  return (
    <div>
      <div className="tasks active-tasks">
        {activeTasks.map(task =>
          <Task key={task.name} task={task} {...dispatches} />
        )}
      </div>
      <div className="tasks inactive-tasks">
        {inactiveTasks.map(task =>
          <Task key={task.name} task={task} {...dispatches} />
        )}
      </div>
    </div>
  );
};

export default Tasks;
