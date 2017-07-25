// @flow
import React from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/task";

type Props = {
  cancel: () => void,
  dispatch: Dispatch
};

let AddInput = ({ cancel, dispatch }: Props) => {
  let task;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        if (task.value.trim()) {
          dispatch(addTask(task.value.trim(), 1));

          task.value = "";
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
