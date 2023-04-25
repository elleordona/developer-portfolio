//* Register Component

// imports
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';

import authService from '../utils/auth.service';
import validationService from '../utils/validation.serviceHelpers';

const Register = () => {
	// const form = useRef();
	// const checkBtn = useRef();

	const [name, setName] = useState(``);
	const [username, setUsername] = useState(``);
	const [email, setEmail] = useState(``);
	const [password, setPassword] = useState(``);
	const [successful, setSuccessful] = useState(false);
	const [message, setMessage] = useState(``);

	const onChangeName = (e) => {
		const name = e.target.value;
		setName(name);
	};

	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const navigate = useNavigate();
	useEffect(() => {
		if (successful) navigate(`/`);
	}, [successful, navigate]);

	const handleRegister = async (e) => {
		e.preventDefault();

		setMessage(``);
		setSuccessful(false);

		// form.current.validateAll();

		if (name && username && password && email) {
			const register = await authService.register(name, username, password, email);
			if (register.message) {
				setMessage(register.message);
				setSuccessful(true);
			} else {
				setMessage(register.error);
				setSuccessful(false);
			}
		}
	};

	return (
		<div className="card w-75 mx-auto text-center justify-content-center p-4">
			<h3>Create a New Account</h3>
			<form onSubmit={handleRegister}>
				{!successful && (
					<div>
						<div className="form-group">
							<label htmlFor="name">Name:</label>
							<input type="text" name="name" id="name" className="form-control" value={name} onChange={onChangeName} validations={[validationService.required]} />
						</div>
						<div className="form-group">
							<label htmlFor="username">Username:</label>
							<input type="text" name="username" id="username" className="form-control" value={username} onChange={onChangeUsername} validations={[validationService.required, validationService.validUsername]} />
						</div>
						<div className="form-group">
							<label htmlFor="email">Email:</label>
							<input type="email" name="email" id="email" className="form-control" value={email} onChange={onChangeEmail} validations={[validationService.required, validationService.validEmail]} />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password:</label>
							<input type="password" name="password" id="password" className="form-control" value={password} onChange={onChangePassword} validations={[validationService.required, validationService.validPassword]} />
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-dark mt-2">
								Sign Up
							</button>
						</div>
					</div>
				)}
				{message && (
					<div className="form-group">
						<div className={successful ? `alert alert-success` : `alert alert-danger`} role="alert">
							{message}
						</div>
					</div>
				)}
			</form>
		</div>
	);
};

export default Register;
