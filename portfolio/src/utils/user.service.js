//* getting content based on users role

// imports
import axios from 'axios';
import authHeader from './auth-header';

const API_URI = `${process.env.REACT_APP_DB}/api/`;

const getPublicContent = () => {
	return axios.get(`${API_URI}all`);
};

const getUserBoard = () => {
	return axios.get(`${API_URI}user`, { headers: authHeader() });
};

const getModBoard = () => {
	return axios.get(`${API_URI}mod`, { headers: authHeader() });
};

const getAdminBoard = () => {
	return axios.get(`${API_URI}admin`, { headers: authHeader() });
};

const userService = {
	getPublicContent,
	getUserBoard,
	getModBoard,
	getAdminBoard,
};

export default userService;
