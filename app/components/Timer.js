// @flow
import React, { Component } from "react";

type Props = {
  active?: boolean,
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
      timerInterval: this.props.active
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

/**
 * Gets time in seconds, returns a formatted string which we'll use to display
 * the timer
 *
 * @export
 * @param {number} time in seconds
 * @returns {string}
 */
export function displayTime(time: number): string {
  const hours = Math.floor(time / 3600);

  const remaining = time - hours * 3600;

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining - minutes * 60;

  if (hours > 0)
    return `${hours}:${zeroPadding(minutes)}:${zeroPadding(seconds)}`;
  return `${zeroPadding(minutes)}:${zeroPadding(seconds)}`;
}

export function zeroPadding(seconds: number): string {
  const secondsString = String(seconds);

  if (secondsString.length > 1) {
    // Basically do nothing
    return secondsString;
  }
  return `0${secondsString}`;
}

export default Timer;
