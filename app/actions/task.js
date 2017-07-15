// @flow
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

type actionType = {
  type: string,
  name: string,
  currentProgress?: number,
  totalPomodoros?: number,
  stopped?: number,
  active?: boolean
};

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
    name
  };
}
