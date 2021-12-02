import React, { Component } from 'react';
import './App.css';
import './nprogress.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
  }

  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      locationEvents = locationEvents.slice(0, numberOfEvents);
      this.setState({
        events: locationEvents,
        currentLocation: location
      });
    });
  }

  updateEventNumber = (value) => {
    this.setState({
      numberOfEvents: value
    });
    const { currentLocation } = this.state;
    this.updateEvents(currentLocation, this.numberOfEvents);
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.numberOfEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
