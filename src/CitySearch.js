import React, { Component } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import './styles/CitySearch.scss';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  }

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false
    });
    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      <Container className="CitySearch">
        <Row>
          <Col />
          <Col xs={6}>
            <h4>Search</h4>
            <input
              type="text"
              className="city"
              placeholder="Search for a city"
              value={this.state.query}
              onChange={this.handleInputChanged}
              onFocus={() => { this.setState({ showSuggestions: true }) }}
            />
            <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
              {this.state.suggestions.map((suggestion) => (
                <li key={suggestion}
                  onClick={() => this.handleItemClicked(suggestion)}>
                  {suggestion}</li>
              ))}
              <li onClick={() => this.handleItemClicked('all')}>
                <b>See all cities</b>
              </li>
            </ul>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default CitySearch;