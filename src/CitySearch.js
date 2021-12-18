import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './styles/CitySearch.scss';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
	state = {
		query: '',
		suggestions: [],
		showSuggestions: undefined,
		infoText: '',
	};

	handleInputChanged = event => {
		const value = event.target.value;
		const suggestions = this.props.locations.filter(location => {
			return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
		});
		if (suggestions.length === 0) {
			this.setState({
				query: value,
				infoText:
					'We cannot find the city you are looking for. Please try another city',
			});
		} else {
			return this.setState({
				query: value,
				suggestions,
				infoText: '',
			});
		}
	};

	handleItemClicked = suggestion => {
		this.setState({
			query: suggestion,
			showSuggestions: false,
		});
		this.props.updateEvents(suggestion);
	};

	render() {
		return (
			<Container className="CitySearch">
				<Row>
					<InfoAlert className="alert" text={this.state.infoText} />
				</Row>
				<Row>
					<Col>
						<p className="choose-text">Choose your nearest city</p>
						<input
							type="text"
							className="city"
							placeholder="Search for a city"
							value={this.state.query}
							onChange={this.handleInputChanged}
							onFocus={() => {
								this.setState({ showSuggestions: true });
							}}
						/>
						<ul
							className="suggestions"
							style={this.state.showSuggestions ? {} : { display: 'none' }}
						>
							{this.state.suggestions.map(suggestion => (
								<li
									key={suggestion}
									onClick={() => this.handleItemClicked(suggestion)}
								>
									{suggestion}
								</li>
							))}
							<li onClick={() => this.handleItemClicked('all')}>
								<b>See all cities</b>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default CitySearch;
