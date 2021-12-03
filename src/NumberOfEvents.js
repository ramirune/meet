import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  updateNumberofEvents = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: '',
      });
    } else {
      this.setState({
        numberOfEvents: value,
      });
      //this.props.updateNumberofEvents(value);
    }
  };

  render() {
    return (
      <div>
        <p>Number of events to show:</p>
        <input type="number" value={this.state.numberOfEvents} className="number-of-events" onChange={this.updateNumberofEvents} />
      </div>
    );
  }
}

export default NumberOfEvents;