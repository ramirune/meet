import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  }

  updateNumberofEvents = (event) => {
    const number = event.target.value;
    if (number < 1 || number > 32) {
      this.setState({
        numberOfEvents: 32,
      });
    } else {
      this.setState({
        numberOfEvents: number,
      });
      this.props.updateNumberofEvents(number);
    }
  };

  render() {
    return (
      <div>
        <p>Number of events to show:</p>
        <input type="number" value={this.props.numberOfEvents} className="number-of-events" onChange={this.updateNumberofEvents} />
      </div>
    );
  }
}

export default NumberOfEvents;