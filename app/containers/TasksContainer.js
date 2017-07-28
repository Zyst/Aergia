// @flow
import { connect } from "react-redux";
import Tasks from "../components/Tasks";
import * as taskActions from "../actions/task";
import type { taskStateType } from "../reducers/task";

const mapStateToProps = ({ task }: { task: taskStateType }) => ({
  tasks: task
});

/* eslint-disable flowtype/no-weak-types */
const mapDispatchToProps = (dispatch: Function) => ({
  completeTask(name: string) {
    dispatch(taskActions.completeTask(name));
  },
  removeTask(name: string) {
    dispatch(taskActions.removeTask(name));
  },
  activateTask(name: string) {
    dispatch(taskActions.activateTask(name));
  },
  deactivateTask(name: string) {
    dispatch(taskActions.deactivateTask(name));
  }
});

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TasksContainer;
