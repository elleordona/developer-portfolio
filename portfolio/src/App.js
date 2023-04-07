import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';

import AppNavbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';

function App() {
	return (
		<div className="App">
			<Stack gap={3}>
				<div>
					<AppNavbar />
				</div>
				<div className="main">
					<Routes>
						<Route path="/" element={<LandingPage />} />
					</Routes>
					<footer className="footer mx-10vw">Elle Ordoña 2023</footer>
				</div>
			</Stack>
		</div>
	);
}

export default App;
