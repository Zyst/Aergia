// @flow
import React, { Component } from "react";

type Props = {
  cancel: () => void
};

class AddInput extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <form>
        {/* eslint-disable jsx-a11y/no-autofocus */}
        <input type="text" autoFocus placeholder="Task name" />;
      </form>
    );
  }
}

export default AddInput;
