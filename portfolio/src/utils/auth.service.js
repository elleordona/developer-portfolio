//* functions for signup/in and log out

// imports
import axios from 'axios';

const API_URI = `https://portfolio-backend-4svs.onrender.com/api/auth/`;
// const API_URI = `http://localhost:4000/api/auth/`;

const register = async (name, username, password, email) => {
	try {
		const response = await axios.post(`${API_URI}signup`, {
			name,
			username,
			password,
			email,
		});

		const data = response.data;

		return data;
	} catch (e) {
		return { error: e.response.data.message };
	}
};

const login = async (username, password) => {
	try {
		const response = await axios.post(`${API_URI}signin`, {
			username,
			password,
		});
		const data = await response.data;
		if (data.accessToken) {
			localStorage.setItem(`user`, JSON.stringify(response.data));
		}

		return data;
	} catch (e) {
		return { error: e.response.data.message };
	}
};

const logout = () => {
	localStorage.removeItem(`user`);
};

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem(`user`));
};

const authService = {
	register,
	login,
	logout,
	getCurrentUser,
};

export default authService;
