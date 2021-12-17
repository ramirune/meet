import React from 'react';
import './styles/WelcomeScreen.css';
import welcomeLogo from './img/logo_welcome.png';
import { Row, Col } from 'react-bootstrap';

function WelcomeScreen(props) {
	return props.showWelcomeScreen ? (
		<div className="WelcomeScreen">
			<Row>
				<Col></Col>
				<Col>
					<img
						src={welcomeLogo}
						alt="meet app welcome logo"
						className="welcomeLogo"
					/>
				</Col>
				<Col></Col>
			</Row>
			<Row>
				<Col>
					<h1>Welcome to the Meet App</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<p className="text">
						Log in to see upcoming events around the world for full-stack
						developers
					</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className="button_cont" align="center">
						<div class="google-btn">
							<div class="google-icon-wrapper">
								<img
									class="google-icon"
									src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
									alt="Google sign-in"
								/>
							</div>
							<button
								onClick={() => {
									props.getAccessToken();
								}}
								rel="nofollow noopener"
								class="btn-text"
							>
								<b className="sign-text">Sign in with google</b>
							</button>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<a
						href="https://ramirune.github.io/meet/privacy.html"
						rel="nofollow noopener"
					>
						Privacy policy
					</a>
				</Col>
			</Row>
		</div>
	) : null;
}

export default WelcomeScreen;
