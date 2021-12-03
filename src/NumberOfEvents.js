import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  }

  handleInputChanged = (event) => {
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: '',
      });
    } else {
      this.setState({
        numberOfEvents: value,
      });
      this.props.updateNumberofEvents(event.target.value);
    }
  };

  render() {
    return (
      <div>
        <p>Number of events to show:</p>
        <input type="number" value={this.props.numberOfEvents} className="number-of-events" onChange={(e) => this.handleInputChanged(e)} />
      </div>
    );
  }
}

export default NumberOfEvents;