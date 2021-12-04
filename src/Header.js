import React from "react";
import logo from "./img/meet.png";
import './styles/Header.scss';
import { Row, Col, Container } from "react-bootstrap";

function Header(prop) {
  return (
    <Container className="logo-container">
      <Row>
        <Col />
        <Col xs={6}>
          <img src={logo} alt="Meet app logo" className="logo" />
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default Header;