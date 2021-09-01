import React, { Component } from "react";
import Timers from "./pomodoroComponent/timer";

import "./pomodoroStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Pomodoro extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 id="semangat">Hello, brilians</h1>
        <div className="container glass">
          <Timers />
        </div>
      </div>
    );
  }
}

export default Pomodoro;
