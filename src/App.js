import React, { Component } from 'react';
import './nprogress.css';
import { Container, Row, Col } from "react-bootstrap";
import './styles/App.scss';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Header from './Header';
import { extractLocations, getEvents } from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      currentLocation: 'all'
    };
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

  updateEvents = async (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
        });
      }
    });
  }

  updateNumberOfEvents = async (e) => {
    const newNumber = e.target.value ? parseInt(e.target.value) : 32;

    if (newNumber < 1 || newNumber > 32) {
      this.setState({
        numberOfEvents: '32',
      });
    } else {
      this.setState({
        errorText: "",
        numberOfEvents: newNumber,
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    }
  };

  getData = () => {
    if (this.mounted) {
      const { locations, events } = this.state;
      const data = locations.map((location) => {
        const number = events.filter((event) => event.location === location).length
        const city = location.split(', ').shift();
        return { city, number };
      });
      return data;
    }
  };

  render() {
    return (
      <Container className="app-container">
        <div className="App">
          <Row>
            <Header />
          </Row>
          <Row>
            <Col>
              <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
            </Col>
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
