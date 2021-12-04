import React, { Component } from "react";
import Event from './Event';
import { Row, Col } from "react-bootstrap";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Row>
        <Col md={10} sm={12} className="event-list">
          <ul className="EventList row">
            {events.map(event =>
              <li key={event.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <Event event={event} />
              </li>
            )}
          </ul>
        </Col>
      </Row>
    );
  }
}

export default EventList;