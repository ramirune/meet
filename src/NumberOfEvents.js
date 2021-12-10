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
          <Col>
          <ErrorAlert text={this.props.errorText} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NumberOfEvents;