import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: '',
  }

  updateEventNumber = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
    this.props.updateEventNumber(value);
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <p className="eventNr">Number of Events</p>
        <input
          type="text"
          className="number-events"
          value={this.props.numberOfEvents}
          onChange={(e) => this.props.updateEventNumber(e)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;