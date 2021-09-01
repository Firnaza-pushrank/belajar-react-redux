import React, { Component } from "react";
import DrumPad from "./DrumComponent/DrumPad";

import "./DrumStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DrumSetting from "./DrumComponent/DrumSetting";
import PadsBank from "./DrumComponent/PadsBank";

class DrumMachine extends Component {
  render() {
    return (
      <div>
        <h1 className="semangat">YOU CAN DO IT!!!</h1>
        <div id="drum-machine" className="container">
          <div id="display" className="container">
            <PadsBank power={true} />
            <DrumSetting />
          </div>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
