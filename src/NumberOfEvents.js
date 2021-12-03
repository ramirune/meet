import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  }

  handleInputChanged = (eventCount) => {
    if (eventCount < 1 || eventCount > 32) {
      this.setState({
        numberOfEvents: ''
      });
    } else {
      this.setState({
        numberOfEvents: eventCount,
      });
      this.props.updateNumberofEvents(eventCount);
    }
  };

  render() {
    return (
      <div>
        <p>Number of events to show:</p>
        <input type="number" value={this.props.numberOfEvents} className="number-of-events" onChange={(e) => this.handleInputChanged(e.currentTarget.value)} />
      </div>
    );
  }
}

export default NumberOfEvents;