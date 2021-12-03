import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const numberOfEvents = event.target.value
    if (numberOfEvents < 1 || numberOfEvents > 32) {
      this.setState({
        numberOfEvents: '',
      });
    } else {
      this.setState({
        numberOfEvents,
      });
      //this.props.updateNumberofEvents(eventCount);
    }
  };

  render() {
    return (
      <div>
        <p>Number of events to show:</p>
        <input type="number"
          value={this.state.numberOfEvents}
          className="number-of-events"
          onChange={this.handleInputChanged} />
      </div>
    );
  }
}

export default NumberOfEvents;