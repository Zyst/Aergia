// @flow
import React, { Component } from "react";
import AddButton from "../components/AddButton";
import AddInput from "../components/AddInput";

type State = {
  adding: boolean
};

class Add extends Component {
  state: State;

  constructor() {
    super();

    this.state = {
      adding: false
    };
  }

  render() {
    return this.state.adding
      ? <AddInput
          cancel={() => {
            this.setState({ adding: false });
          }}
        />
      : <AddButton
          add={() => {
            this.setState({ adding: true });
          }}
        />;
  }
}

export default Add;
