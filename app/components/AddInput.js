// @flow
import React from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/task";
import type { actionType } from "../reducers/task";

type Props = {
  cancel: () => void,
  dispatch: (action: actionType) => void
};

/* eslint-disable import/no-mutable-exports */
let AddInput = ({ cancel, dispatch }: Props) => {
  let task: ?HTMLInputElement;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        if (task && task.value.trim()) {
          dispatch(addTask(task.value.trim(), 1));

          task.value = "";

          cancel();
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
};
AddInput = connect()(AddInput);

export default AddInput;
