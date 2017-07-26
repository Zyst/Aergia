// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/task";
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

  render() {
    let task: ?HTMLInputElement;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();

          if (task && task.value.trim()) {
            this.props.dispatch(addTask(task.value.trim(), 1));

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
