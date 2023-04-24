//* validation service when registering

// imports
import React from 'react';
import { isEmail } from 'validator';

const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
};

const validEmail = (value) => {
	if (!isEmail(value)) {
		return (
			<div className="alert alert-danger" role="alert">
				This is not a valid email!
			</div>
		);
	}
};

const validUsername = (value) => {
	if (value.length < 3 || value.length > 20) {
		<div className="alert alert-danger" role="alert">
			Your username must be between 3 and 20 characters!
		</div>;
	}
};

const validPassword = (value) => {
	if (value.length < 6 || value.length > 40) {
		return (
			<div className="alert alert-danger" role="alert">
				Your password must be between 6 and 40 characters!
			</div>
		);
	}
};

const validationService = {
	required,
	validEmail,
	validUsername,
	validPassword,
};

export default validationService;
