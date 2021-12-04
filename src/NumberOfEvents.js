import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import './styles/NumberOfEvents.scss';

class NumberOfEvents extends Component {
  render() {
    return (
      <Container className="NumberOfEvents">
        <Row>
          <Col>
            <p>Number of events to show:</p>
            <input type="number"
              value={this.props.numberOfEvents}
              className="number-of-events"
              onChange={(e) => this.props.updateNumberOfEvents(e)} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NumberOfEvents;