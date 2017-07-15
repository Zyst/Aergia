// @flow
import { ADD_TASK, REMOVE_TASK } from "../actions/task";

export type taskStateType = Array<{
  name: string,
  currentProgress: number,
  totalPomodoros: number,
  stopped: number,
  active: boolean
}>;

type actionType = {
  type: string,
  name: string,
  totalPomodoros: number
};

export default function tasks(
  state: taskStateType,
  action: actionType
): taskStateType {
  switch (action.type) {
    case ADD_TASK:
      // If a task with that name doesn't exist already
      if (state.filter(task => task.name === action.name).length === 0) {
        return [
          ...state,
          {
            name: action.name,
            currentProgress: 0,
            totalPomodoros: action.totalPomodoros,
            stopped: 0,
            active: false
          }
        ];
      }
      return state;
    case REMOVE_TASK:
      return state.filter(task => task.name !== action.name);
    default:
      return state;
  }
}
