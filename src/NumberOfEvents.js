import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: '32',
  }

  updateEventNumber = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <p className="eventNr">Number of Events</p>
        <input
          type="text"
          className="number-events"
          value={this.state.numberOfEvents}
          onChange={this.updateEventNumber}
        />
      </div>
    );
  }
}

export default NumberOfEvents;