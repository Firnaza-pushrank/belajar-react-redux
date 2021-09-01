import React, { Component } from "react";

class DrumSetting extends Component {
  render() {
    return (
      <div id="drum-settings">
        <div className="setting">
          <h1>Drums Controls</h1>
          <div>
            <input id="s2" type="checkbox" class="switch" />
            <label for="s2">ON/OFF</label>
            <input id="s2" type="checkbox" class="switch" />
            <label for="s2">MODE</label>
          </div>

          <div className="volume">
            <h1>Volume</h1>
            <input max="1" min="0" step="0.01" type="range" />
          </div>
        </div>
      </div>
    );
  }
}

export default DrumSetting;
