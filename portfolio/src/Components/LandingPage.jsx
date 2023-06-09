// component for LandingPage

// imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './styles/LandingPage.css';
import picOfMe from '../images/me.jpg';

const LandingPage = () => {
	return (
		<div>
			<Container fluid="md">
				<Image src={picOfMe} alt="Elle Ordona" className="img" rounded />

				<h2>Hi, I'm Elle Ordoña. I am Full Stack Developer starting my journey in the tech industry.</h2>

				<h5 className="text-muted">If I'm not at home on my computer coding or playing games, you will usually find me in the gym, playing basketball, or with my family.</h5>

				<div className="learn-more">
					<span>Learn more about me </span>
					<span>
						<Button size="sm" variant="link" className="aboutMeBtn" href="/about">
							<FontAwesomeIcon icon={faArrowRight} />
						</Button>
					</span>
				</div>
			</Container>
		</div>
	);
};

export default LandingPage;
