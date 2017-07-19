// @flow
import React, { Component } from "react";

type Props = {
  active: boolean,
  minutes: number
};

type State = {
  time: number,
  active: boolean,
  timerInterval: number
};

class Timer extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      // Time is in seconds
      time: this.props.minutes * 60,
      active: this.props.active,
      timerInterval: this.state.active
        ? setInterval(() => this.reduceTime(), 1000)
        : -1
    };
  }

  componentWillUnmount(): void {
    clearInterval(this.state.timerInterval);
  }

  reduceTime(): void {
    if (this.state.time >= 0) {
      this.setState({ time: this.state.time - 1 });
    }
  }

  render() {
    return (
      <h1 className="timer">
        {displayTime(this.state.time)}
      </h1>
    );
  }
}

function displayTime(time: number): string {
  return zeroPadding(time);
}

function zeroPadding(seconds: number) {
  const secondsString = String(seconds);

  if (secondsString.length > 1) {
    // Basically do nothing
    return secondsString;
  }
  return `0${secondsString}`;
}

export default Timer;
