import React, { Component } from 'react';
import './nprogress.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

import EventList from './EventList';
import EventGenre from './EventGenre';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Header from './Header';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			events: [],
			locations: [],
			numberOfEvents: 32,
			currentLocation: 'all',
			errorText: '',
			showWelcomeScreen: undefined,
		};
	}

	async componentDidMount() {
		const { numberOfEvents } = this.state;
		this.mounted = true;
		const accessToken = localStorage.getItem('access_token');
		const isTokenValid = (await checkToken(accessToken)).error ? false : true;
		const searchParams = new URLSearchParams(window.location.search);
		const code = searchParams.get('code');

		this.setState({ showWelcomeScreen: !(code || isTokenValid) });
		if ((code || isTokenValid) && this.mounted) {
			getEvents().then(events => {
				if (this.mounted) {
					this.setState({
						events: events.slice(0, numberOfEvents),
						locations: extractLocations(events),
					});
				}
			});
		}
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	updateEvents = async (location, numberOfEvents) => {
		getEvents().then(events => {
			const locationEvents =
				location === 'all'
					? events
					: events.filter(event => event.location === location);
			if (this.mounted) {
				this.setState({
					events: locationEvents.slice(0, this.state.numberOfEvents),
					currentLocation: location,
				});
			}
		});
	};

	updateNumberOfEvents = async e => {
		const newNumber = e.target.value ? parseInt(e.target.value) : 32;
		if (newNumber < 1 || newNumber > 32) {
			return this.setState({
				errorText: 'Please choose a number between 1 and 32.',
				numberOfEvents: 0,
			});
		} else {
			this.setState({
				errorText: '',
				numberOfEvents: newNumber,
			});
			this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
		}
	};

	getData = () => {
		if (this.mounted) {
			const { locations, events } = this.state;
			const data = locations.map(location => {
				const number = events.filter(
					event => event.location === location
				).length;
				const city = location.split(', ').shift();
				return { city, number };
			});
			return data;
		}
	};

	render() {
		const { events } = this.state;
		if (this.state.showWelcomeScreen === undefined)
			return <div className="App" />;

		return (
			<Container className="app-container" fluid>
				<div className="App">
					<Row>
						<Header />
					</Row>
					<Row>
						<Col>
							<CitySearch
								locations={this.state.locations}
								updateEvents={this.updateEvents}
							/>
						</Col>
						<Col>
							<NumberOfEvents
								numberOfEvents={this.state.numberOfEvents}
								updateNumberOfEvents={this.updateNumberOfEvents}
								errorText={this.state.errorText}
							/>
						</Col>
					</Row>
					<Row>
						<div className="data-vis-wrapper">
							<Col>
								<EventGenre events={events} />
							</Col>
							<Col md={8}>
								<ResponsiveContainer height={400}>
									<ScatterChart
										width={800}
										height={400}
										margin={{
											top: 20,
											right: 20,
											bottom: 20,
											left: 20,
										}}
									>
										<CartesianGrid />
										<XAxis type="category" dataKey="city" name="city" />
										<YAxis
											type="number"
											dataKey="number"
											name="number of events"
											allowDecimals={false}
										/>
										<Tooltip cursor={{ strokeDasharray: '3 3' }} />
										<Scatter data={this.getData()} fill="#ffb71d" />
									</ScatterChart>
								</ResponsiveContainer>
							</Col>
						</div>
					</Row>
					<Row>
						<Col>
							<EventList events={this.state.events} />
						</Col>
					</Row>
					<Row>
						<Col></Col>
						<Col xs={12} sm={12} md={10}>
							<WelcomeScreen
								showWelcomeScreen={this.state.showWelcomeScreen}
								getAccessToken={() => {
									getAccessToken();
								}}
							/>
						</Col>
						<Col></Col>
					</Row>
				</div>
			</Container>
		);
	}
}

export default App;
