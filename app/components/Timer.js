// @flow
import React, { Component } from "react";

class Timer extends Component {
  props: {
    active: boolean,
    time: number
  };

  timer: number;

  state: {
    time: number
  };

  constructor(props: props) {
    super(props);

    this.state = {
      // Time is in seconds
      time: props.time * 60,
      active: props.active
    };
  }

  componentDidMount(): void {
    this.timer = setInterval(() => this.reduceTime(), 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timer);
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
  return time.toString();
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
