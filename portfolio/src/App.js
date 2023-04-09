import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppNavbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import DarkModeButton from './Components/DarkModeButton';

function App() {
	return (
		<div className="App">
			<AppNavbar />

			<div className="main">
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</div>
			<footer className="footer">
				Elle Ordoña 2023
				<DarkModeButton />
			</footer>
		</div>
	);
}

export default App;
