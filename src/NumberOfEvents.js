import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import './styles/NumberOfEvents.scss';
import { Alert, ErrorAlert } from './Alert';

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
        <Row>
          <ErrorAlert text={this.props.errorText} />
        </Row>
      </Container>
    );
  }
}

export default NumberOfEvents;