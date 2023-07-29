import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import authService from './utils/auth.service';

import AppNavbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';

function App() {
	const [showModBoard, setShowModBoard] = useState(false);
	const [showAdminBoard, setShowAdminBoard] = useState(false);
	const [currentUser, setCurrentUser] = useState(undefined);

	useEffect(() => {
		const user = authService.getCurrentUser();

		if (user) {
			setCurrentUser(user);
			setShowModBoard(user.roles.includes(`ROLE_MODERATOR`));
			setShowAdminBoard(user.roles.includes(`ROLE_ADMIN`));
		}
	}, []);

	const logOut = () => {
		authService.logout();
	};

	return (
		<div className="App">
			<AppNavbar currentUser={currentUser} showModBoard={showModBoard} showAdminBoard={showAdminBoard} logOut={logOut} />
			<div className="container">
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
