// Navbar Component

// imports
import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Button, InputGroup } from 'react-bootstrap';
import { ThemeContext, themes } from '../utils/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './styles/Navbar.css';

const AppNavbar = () => {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<Navbar fixed="top">
			<Nav className="m-auto">
				<NavbarBrand href="/" className="nav-brand">
					Elle Ordoña
				</NavbarBrand>
			</Nav>

			<Nav>
				<NavItem>
					<NavLink className="link" href="/">
						Home
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink className="link" href="/projects">
						Projects
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink className="link" href="/about">
						About Me
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink className="link" href="/contact">
						Contact
					</NavLink>
				</NavItem>
			</Nav>

			<Nav className="m-auto">
				<NavItem>
					<Container>
						<InputGroup>
							<ThemeContext.Consumer>
								{({ changeTheme }) => (
									<Button
										variant={darkMode ? 'outline-light' : 'outline-dark'}
										onClick={() => {
											setDarkMode(!darkMode);
											changeTheme(darkMode ? themes.light : themes.dark);
										}}
										size="sm"
									>
										<FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
									</Button>
								)}
							</ThemeContext.Consumer>
						</InputGroup>
					</Container>
				</NavItem>
			</Nav>
		</Navbar>
	);
};

export default AppNavbar;
