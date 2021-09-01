import React, { Component } from "react";
//import RandomQuote from "./features/randomQuote/randomQuote";
//import MarkdownPreviewer from "./features/markdownPreviewer/markdownPreviewer";
//import DrumMachine from "./features/DrumMachine/DrumMachine";
import Pomodoro from "./features/Pomodoro/pomodoroClock";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        {/** <MarkdownPreviewer />*/}
        {/** <RandomQuote />*/}
        {/** <DrumMachine /> */}
        <Pomodoro />
      </div>
    );
  }
}

export default App;
