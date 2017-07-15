// @flow
import { ADD_TASK, REMOVE_TASK, ACTIVATE_TASK } from "../actions/task";

export type taskStateType = Array<{
  name: string,
  currentProgress?: number,
  totalPomodoros?: number,
  stopped?: number,
  active?: boolean
}>;

export type actionType = {
  type: string,
  name: string,
  currentProgress?: number,
  totalPomodoros?: number,
  stopped?: number,
  active?: boolean
};

export default function tasks(
  state: taskStateType,
  action: actionType
): taskStateType {
  switch (action.type) {
    case ADD_TASK: {
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
    }

    case REMOVE_TASK: {
      return state.filter(task => task.name !== action.name);
    }

    case ACTIVATE_TASK: {
      // If the task exists
      if (state.filter(task => task.name === action.name)) {
        return state.map(task => {
          if (task.name === action.name) {
            return {
              ...task,
              active: true
            };
          }
          return task;
        });

        // [
        //   ...state.filter(task => task.name !== action.name),
        //   {
        //     ...item[0],
        //     active: true
        //   }
        // ];
      }
      return state;
    }

    default: {
      return state;
    }
  }
}
