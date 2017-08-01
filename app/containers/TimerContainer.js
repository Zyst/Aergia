// @flow
import { connect } from "react-redux";
import Timer from "../components/Timer";
import type { taskStateType } from "../reducers/task";

const mapStateToProps = ({ task }: { task: taskStateType }) => ({
  active: task.reduce((acc, current) => acc || current.active, false),
  minutes: 25,
  break: 5
});

const mapDispatchToProps = () => ({});

const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(Timer);

export default TimerContainer;
