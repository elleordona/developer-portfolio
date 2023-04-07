import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppNavbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';

function App() {
	return (
		<div className="App">
			<header>
				<AppNavbar />
			</header>
			<div className="main">
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</div>

			<footer className="footer mx-10vw">Elle Ordoña 2023</footer>
		</div>
	);
}

export default App;
