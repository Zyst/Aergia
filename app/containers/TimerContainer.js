// @flow
import { connect } from "react-redux";
import Timer from "../components/Timer";
import * as taskActions from "../actions/task";
import type { taskStateType } from "../reducers/task";

const mapStateToProps = ({ task }: { task: taskStateType }) => ({
  active: task.reduce((acc, current) => acc || current.active, false),
  minutes: 25,
  break: 5
});

/* eslint-disable flowtype/no-weak-types */
const mapDispatchToProps = (dispatch: Function) => ({
  pomodoroDone() {
    dispatch(taskActions.pomodoroDone());
  }
});

const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(Timer);

export default TimerContainer;
