// @flow
import React, { Component } from "react";

type Props = {
  active: boolean,
  minutes: number,
  break: number
};

type State = {
  time: number,
  break: boolean
};

class Timer extends Component {
  props: Props;
  state: State;
  timeout: number;

  static defaultProps = {
    active: false
  };

  constructor(props: Props) {
    super(props);

    this.timeout = -1;

    this.state = {
      // Time is in seconds
      time: this.props.minutes * 60,
      break: false
    };
  }

  componentDidMount() {
    this.handleTimer();
  }

  componentWillUpdate() {
    clearTimeout(this.timeout);
  }

  componentDidUpdate() {
    this.handleTimer();
  }

  /**
   * Calls itself continuously as long as we are active, and handles pathing
   * into reducing time and making sure our state is accurate
   *
   * @memberof Timer
   */
  handleTimer(): void {
    if (this.props.active) {
      this.timeout = setTimeout(() => {
        this.reduceTime();
      }, 1000);
    } else if (
      this.state.time !== this.props.minutes * 60 ||
      this.state.break
    ) {
      // We set back the state to the initial value
      this.setState({ time: this.props.minutes * 60, break: false });
    }
  }

  handleRestart(): void {
    if (this.state.break) {
      this.setState({
        time: this.props.minutes * 60,
        break: false
      });
    } else {
      this.setState({
        time: this.props.break * 60,
        break: true
      });
    }
  }

  reduceTime(): void {
    if (this.state.time > 1) {
      this.setState({ time: this.state.time - 1 });
    } else {
      this.handleRestart();
    }
  }

  render() {
    const classes = this.state.break ? "timer break" : "timer";

    return (
      <h1 className={classes}>
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
