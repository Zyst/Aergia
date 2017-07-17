// @flow
import {
  ADD_TASK,
  COMPLETE_TASK,
  REMOVE_TASK,
  ACTIVATE_TASK,
  DEACTIVATE_TASK
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
  state: taskStateType = [],
  action: actionType
): taskStateType {
  switch (action.type) {
    case ADD_TASK:
      // If a task with that name doesn't exist already
      if (
        state.filter(task => task.name === action.name).length === 0 &&
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
      return state.filter(task => task.name !== action.name);

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
            active: false
          };
        }
        return task;
      });

    default:
      return state;
  }
}
