import React, { Component } from "react";
import Event from './Event';
import { Row, Col, Container } from "react-bootstrap";
import './styles/EventList.scss';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Container className="eventlist-container">
        <Row className="event-list">
          <Col md={10} sm={12}>
            <ul className="EventList row">
              {events.map(event =>
                <li key={event.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <Event event={event} />
                </li>
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventList;