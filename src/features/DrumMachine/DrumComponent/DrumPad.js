import React, { Component } from "react";

const activeStyle = {
  backgroundColor: "orange",
  boxShadow: "0 3px orange",
};

const inactiveStyle = {
  backgroundColor: "white",
  boxShadow: "4px 4px 8px 0 rgb(56, 182, 224)",
};

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactiveStyle,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
    this.activePad = this.activePad.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  activePad(e) {
    if (this.props.power) {
      if (this.state.padStyle.backgroundColor === "orange") {
        this.setState({
          padStyle: inactiveStyle,
        });
      } else {
        this.setState({
          padStyle: activeStyle,
        });
      }
    } else if (this.state.padStyle.marginTop === 13) {
      this.setState({
        padStyle: inactiveStyle,
      });
    } else {
      this.setState({
        padStyle: {
          height: 77,
          marginTop: 13,
          backgroundColor: "red",
          boxShadow: "4px 4px 8px 0 rgb(56, 182, 224)",
        },
      });
    }
  }

  playSound() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.activePad();
    setTimeout(() => {
      this.activePad();
    }, 100);
  }
  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.clipId}
        style={this.state.padStyle}
      >
        <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.clip}
        />
        {this.props.keyTrigger}
      </div>
    );
  }
}

export default DrumPad;
