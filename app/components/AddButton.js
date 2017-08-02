// @flow
import React, { Component } from "react";
import Mousetrap from "mousetrap";
import hotkeys from "../utils/hotkeys";

type Props = {
  add: () => void
};

class AddButton extends Component {
  props: Props;

  componentDidMount() {
    Mousetrap.bind(hotkeys.pomodoro.add.addButton.callAdd.key, e => {
      e.preventDefault();
      this.props.add();
    });
  }

  componentWillUnmount() {
    Mousetrap.unbind(hotkeys.pomodoro.add.addButton.callAdd.key);
  }

  render() {
    return (
      <button className="center-block button-primary" onClick={this.props.add}>
        Add task
      </button>
    );
  }
}

export default AddButton;
