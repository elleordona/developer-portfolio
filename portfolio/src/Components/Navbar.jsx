// Navbar Component

// imports
import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'react-bootstrap';

import './styles/Navbar.css';

const AppNavbar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" className="navbar">
			<Container>
				<NavbarBrand href="/" className="nav-brand">
					<b>Elle Ordoña</b>
				</NavbarBrand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
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
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavbar;
