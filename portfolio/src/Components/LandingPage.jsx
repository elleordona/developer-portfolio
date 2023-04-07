// component for LandingPage

// imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './styles/LandingPage.css';
import picOfMe from '../images/Asuna_SAO.png';

const LandingPage = () => {
	return (
		<div>
			<Container fluid>
				<Row>
					<Col>
						<Image src={picOfMe} alt="Elle Ordona" className="img" />
					</Col>
					<Col>
						<h2>Hi, I'm Elle Ordoña. I am Full Stack Developer starting my journey in the tech industry.</h2>
						<h4>If I'm not at home on my computer you will usually find me in the gym, playing basketball or with my family.</h4>
						<span>Learn more about me </span>
						<span>
							<Button size="sm" variant="link" className="aboutMeBtn" href="/about">
								<FontAwesomeIcon icon={faArrowRight} />
							</Button>
						</span>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default LandingPage;
