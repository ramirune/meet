import React, { Component } from 'react';
import './nprogress.css';
import { Container, Row, Col } from "react-bootstrap";

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all'
  }

  componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      this.setState({
        events: events.slice(0, numberOfEvents),
        locations: extractLocations(events)
      });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, numberOfEvents),
        currentLocation: location,
      });
    });
  }

  /*   updateNumberOfEvents = (eventCount) => {
      const { currentLocation } = this.state;
      this.setState({
        numberOfEvents: eventCount
      });
      this.updateEvents(currentLocation, eventCount);
    }
   */
  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

  render() {
    return (
      <Container className="app-container" fluid>
        <div className="App">
          <Row>
            <Col>
              <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
            </Col>
          </Row>
          <Row>
            <Col>
              <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
            </Col>
          </Row>
          <Row>
            <Col>
              <EventList events={this.state.events} />
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default App;
