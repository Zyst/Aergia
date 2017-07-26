// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import Mousetrap from "mousetrap";
import { addTask } from "../actions/task";
import hotkeys from "../utils/hotkeys";
import type { actionType } from "../reducers/task";

type Props = {
  cancel: () => void,
  dispatch: (action: actionType) => void
};
type State = {
  pomodoros: number
};

class AddInput extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      pomodoros: 0
    };
  }

  componentDidMount() {
    Mousetrap.bind(hotkeys.pomodoro.add.addInput.incrementPomodoros.key, e => {
      e.preventDefault();
      this.addPomodoro();
    });
    Mousetrap.bind(hotkeys.pomodoro.add.addInput.decrementPomodoros.key, e => {
      e.preventDefault();
      this.removePomodoro();
    });
  }

  componentWillUnmount() {
    Mousetrap.unbind(hotkeys.pomodoro.add.addInput.incrementPomodoros.key);
    Mousetrap.unbind(hotkeys.pomodoro.add.addInput.decrementPomodoros.key);
  }

  addPomodoro() {
    this.setState({
      pomodoros: this.state.pomodoros + 1
    });
  }

  removePomodoro() {
    if (this.state.pomodoros > 0) {
      this.setState({
        pomodoros: this.state.pomodoros - 1
      });
    }
  }

  render() {
    let task: ?HTMLInputElement;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();

          if (task && task.value.trim()) {
            this.props.dispatch(
              addTask(task.value.trim(), this.state.pomodoros)
            );

            task.value = "";

            this.props.cancel();
          }
        }}
      >
        {/* eslint-disable jsx-a11y/no-autofocus */}
        <input
          ref={node => {
            task = node;
          }}
          className="mousetrap"
          type="text"
          autoFocus
          placeholder="Task name"
        />;
      </form>
    );
  }
}
/* eslint-disable no-class-assign */
AddInput = connect()(AddInput);

export default AddInput;
