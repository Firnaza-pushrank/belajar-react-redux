import React, { Component } from "react";
import { RandomQuote } from './features/randomQuote/randomQuote';
import './App.css';

class App extends Component {
    render(){
      return(
        <div >
          <RandomQuote />
        </div>
      )
    }
}

export default App;