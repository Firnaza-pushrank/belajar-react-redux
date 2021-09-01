import React, { Component } from "react";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  IoIosArrowDown,
} from "react-icons/ti";

class Timers extends Component {
  render() {
    return (
      <div className="container">
        <h1>test</h1>

        <div className="label-groups d-flex justify-content-center">
          <div id="break-label" className="labels">
            <h1 className="labels-name">Break</h1>
            <div className="group-length d-flex justify-content-center">
              <button className="btn btn-secondary btn-sm">
                <TiArrowSortedDown />
              </button>
              <div id="break-length">
                <h2 className="value">5</h2>
              </div>
              <button className="btn btn-secondary btn-sm">
                <TiArrowSortedUp />
              </button>
            </div>
          </div>
          <div id="session-label" className="labels">
            <h1 className="labels-name">Session</h1>
            <div className="group-length d-flex justify-content-center">
              <button className="btn btn-secondary btn-sm">
                <TiArrowSortedDown />
              </button>
              <div id="session-length">
                <h2 className="value">25</h2>
              </div>
              <button className="btn btn-secondary btn-sm">
                <TiArrowSortedUp />
              </button>
            </div>
          </div>
        </div>
        <div className="container timer-groups d-flex justify-content-center">
          <div className="timer-display">
            <h1>hallo</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Timers;
