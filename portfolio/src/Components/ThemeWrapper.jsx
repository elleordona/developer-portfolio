//* Wrapper for the app to toggle dark/light mode

// imports
import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../utils/themeContext';

export const ThemeContextWrapper = (props) => {
	const [theme, setTheme] = useState(themes.dark);

	const changeTheme = (theme) => {
		setTheme(theme);
	};

	useEffect(() => {
		switch (theme) {
			case themes.light:
				document.body.classList.add('white-content');
				break;
			case themes.dark:
			default:
				document.body.classList.remove('white-content');
				break;
		}
	}, [theme]);

	return <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>{props.children}</ThemeContext.Provider>;
};
