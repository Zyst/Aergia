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
    const adding = this.state.adding
      ? <AddInput adding={this.state.adding} />
      : <AddButton adding={this.state.adding} />;

    return adding;
  }
}

export default Add;
