// @flow
type actionType = {
  type: string,
  name: string,
  totalPomodoros: number
};

export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export function addTask(name: string, totalPomodoros: number): actionType {
  return {
    type: ADD_TASK,
    name,
    totalPomodoros
  };
}

export function removeTask(name: string): actionType {
  return {
    type: REMOVE_TASK,
    name,
    totalPomodoros: 0 // This doesn't matter when deleting
  };
}
