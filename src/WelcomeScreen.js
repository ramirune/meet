import React from 'react';
import './styles/WelcomeScreen.css';
import { Row, Col, Container } from 'react-bootstrap';
import welcomeLogo from './img/logo_welcome.png';

function WelcomeScreen(props) {
	return props.showWelcomeScreen ? (
		<Container className="WelcomeScreen">
			<Row>
				<Col></Col>
				<Col xs={12} sm={12} md={10} lg={8}>
					<img
						className="welcome-logo"
						src={welcomeLogo}
						alt="welcome screen logo"
					/>
					<h1 className="head">Welcome to the Meet app</h1>
					<h4>
						Log in to see upcoming events around the world for full-stack
						developers
					</h4>
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
								<b>Sign in with google</b>
							</button>
						</div>
					</div>
					<a
						href="https://YOUR_GITHUB_USERNAME.github.io/meet/privacy.html"
						rel="nofollow noopener"
					>
						Privacy policy
					</a>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	) : null;
}

export default WelcomeScreen;
