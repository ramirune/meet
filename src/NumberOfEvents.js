import React, { Component } from "react";

class NumberOfEvents extends Component {
  /* state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const number = event.target.value
    if (number < 1 || number > 32) {
      this.setState({
        numberOfEvents: '',
      });
    } else {
      this.setState({
        numberOfEvents: number,
      });
      this.props.updateNumberofEvents(number);
    }
  }; */

  render() {
    return (
      <div>
        <p>Number of events to show:</p>
        <input type="number"
          value={this.props.numberOfEvents}
          className="number-of-events"
          onChange={(e) => this.props.updateNumberOfEvents(e)} />
      </div>
    );
  }
}

export default NumberOfEvents;