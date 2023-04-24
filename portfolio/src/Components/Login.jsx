//* Login Component

// imports
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import authService from '../utils/auth.service';
import validationService from '../utils/validation.serviceHelpers';

const Login = () => {
	const form = useRef();
	const checkBtn = useRef();

	const [username, setUsername] = useState(``);
	const [password, setPassword] = useState(``);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState(``);

	let navigate = useNavigate();

	const onChangeUsername = (e) => {
		const newUsername = e.target.value;
		setUsername(newUsername);
	};

	const onChangePassword = (e) => {
		const newPassword = e.target.value;
		setPassword(newPassword);
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		setMessage(``);
		setLoading(true);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			const login = await authService.login(username, password);
			if (localStorage.getItem(`user`)) {
				navigate(`/profile`);
				window.location.reload(false);
			} else {
				console.dir(login);
				setMessage(login.error);
				setLoading(false);
			}
		} else {
			setLoading(false);
		}
	};

	return (
		<div className="card w-50 mx-auto text-center justify-content-center p-4">
			<h3>Login to your Account</h3>
			<form onSubmit={handleLogin}>
				<div className="form-group">
					<label htmlFor="username">Username:</label>
					<input type="text" name="username" id="username" value={username} onChange={onChangeUsername} validations={[validationService.required]} className="mb-2 form-control" />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" id="password" value={password} onChange={onChangePassword} validations={[validationService.required]} className="mb-2 form-control" />
				</div>
				<div className="form-group">
					<button className="btn" type="submit" disabled={loading}>
						{loading && <span className="spinner-border spinner-border-sm"></span>}
						<span>Login</span>
					</button>
				</div>

				{message && (
					<div className="form-group">
						<div className="alert alert-danger" role="alert">
							{message}
						</div>
					</div>
				)}
			</form>
		</div>
	);
};

export default Login;
