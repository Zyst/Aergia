// @flow
import React, { Component } from "react";

type Props = {
  active: boolean,
  minutes: number
};

type State = {
  time: number
};

class Timer extends Component {
  props: Props;
  state: State;

  static defaultProps = {
    active: false
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      // Time is in seconds
      time: this.props.minutes * 60
    };
  }

  /**
   * Calls itself continuously as long as we are active, and handles
   * reducing time and making sure our state is "Accurate"
   *
   * @memberof Timer
   */
  handleTimer(): void {
    if (this.props.active) {
      // We call ourselves again
      setTimeout(this.handleTimer(), 1000);

      // And we reduce time
      this.reduceTime();

      // We check if we need to reset our time
    } else if (this.state.time !== this.props.minutes * 60) {
      // We set back the time state to the initial value
      this.setState({ time: this.props.minutes * 60 });
    }
  }

  reduceTime(): void {
    if (this.state.time > 0) {
      this.setState({ time: this.state.time - 1 });
    }
  }

  render() {
    // On render we start to see if our timer needs to be handled
    this.handleTimer();

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
