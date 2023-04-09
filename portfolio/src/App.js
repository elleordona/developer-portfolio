import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppNavbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';

function App() {
	return (
		<div className="App">
			<AppNavbar />

			<div className="main">
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
