import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppNavbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';

function App() {
	return (
		<div className="App">
			<AppNavbar />
			<div className="main">
				<Routes>
					<Route index element={<LandingPage />} />
					<Route path="/home" element={<LandingPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</div>
			<hr />
			<Footer />
		</div>
	);
}

export default App;
