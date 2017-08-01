// @flow
import {
  ADD_TASK,
  COMPLETE_TASK,
  REMOVE_TASK,
  ACTIVATE_TASK,
  DEACTIVATE_TASK,
  POMODORO_DONE
} from "../actions/task";

export type taskStateType = Array<{
  name?: string,
  currentProgress?: number,
  totalPomodoros?: number,
  stopped?: number,
  active?: boolean
}>;

export type actionType = {
  type: string,
  name?: string,
  payload?: {
    currentProgress?: number,
    totalPomodoros?: number,
    stopped?: number,
    active?: boolean
  }
};

export default function tasks(
  state: taskStateType = [
    {
      name: "Testing",
      currentProgress: 0,
      totalPomodoros: 1,
      stopped: 0,
      active: false
    },
    {
      name: "Active test",
      currentProgress: 1,
      totalPomodoros: 3,
      stopped: 1,
      active: true
    }
  ],
  action: actionType
): taskStateType {
  switch (action.type) {
    case ADD_TASK:
      if (
        // If a task with that name doesn't exist already
        state.filter(task => {
          const taskName = task.name || "";
          const actionName = action.name || "";

          return (
            taskName.toLocaleLowerCase() === actionName.toLocaleLowerCase()
          );
        }).length === 0 &&
        action.payload
      ) {
        return [
          ...state,
          {
            name: action.name,
            currentProgress: 0,
            totalPomodoros: action.payload.totalPomodoros,
            stopped: 0,
            active: false
          }
        ];
      }
      return state;

    // Although this is currently the same as remove, that will change later
    case COMPLETE_TASK:
    case REMOVE_TASK:
      return state.filter(task => task.name !== action.name);

    case ACTIVATE_TASK:
      return state.map(task => {
        if (task.name === action.name) {
          return {
            ...task,
            active: true
          };
        }
        return task;
      });

    case DEACTIVATE_TASK:
      return state.map(task => {
        if (task.name === action.name) {
          return {
            ...task,
            // We increment stopped if the task was active
            stopped: task.active ? task.stopped + 1 : task.stopped,
            active: false
          };
        }
        return task;
      });

    case POMODORO_DONE:
      return state.map(task => {
        if (task.active) {
          return {
            ...task,
            currentProgress: task.currentProgress + 1
          };
        }
        return task;
      });

    default:
      return state;
  }
}
