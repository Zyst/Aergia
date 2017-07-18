// @flow
import type { actionType } from "../reducers/task";

export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const ACTIVATE_TASK = "ACTIVATE_TASK";
export const DEACTIVATE_TASK = "DEACTIVATE_TASK";

export function addTask(name: string, totalPomodoros: number): actionType {
  return {
    type: ADD_TASK,
    name,
    payload: {
      totalPomodoros
    }
  };
}

export function completeTask(name: string): actionType {
  return {
    type: COMPLETE_TASK,
    name,
    payload: {}
  };
}

export function removeTask(name: string): actionType {
  return {
    type: REMOVE_TASK,
    name,
    payload: {}
  };
}

export function activateTask(name: string): actionType {
  return {
    type: ACTIVATE_TASK,
    name,
    payload: {}
  };
}

export function deactivateTask(name: string): actionType {
  return {
    type: DEACTIVATE_TASK,
    name,
    payload: {}
  };
}
