
export const AUTH_TOKEN = 'auth_token';
export const PROPERTY_USER = 'user';
export const USER_TYPE_DRIVER = 'driver';
export const USER_TYPE_PASSENGER = 'passenger';

export const BASE_URL = process.env.REACT_APP_RIDE_API_URL;

export const API = {
	LOGIN_URL: `${BASE_URL}/auth/login`,
	LOGOUT_URL: `${BASE_URL}/auth/logout`,
	SIGNUP_URL: `${BASE_URL}/auth/signup`,
	ADD_AND_RETRIEVE_RIDES_URL: `${BASE_URL}/rides`,
	POST_FETCH_RIDE_REQUESTS_URL: `${BASE_URL}/rides/{0}/requests`,
	UPDATE_RIDE_REQUESTS_URL: `${BASE_URL}/rides/{0}/requests/{1}`,
	DELETE_RIDE_URL: `${BASE_URL}/rides/{0}/`
};
