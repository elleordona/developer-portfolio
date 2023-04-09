// component for the Dark Mode Toggle Button

// imports
import React, { useState } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { ThemeContext, themes } from '../utils/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeButton = () => {
	const [darkMode, setDarkMode] = useState(true);

	return (
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
	);
};

export default DarkModeButton;
