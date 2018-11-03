import { Redirect, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import React from 'react';
import { AUTH_TOKEN } from '../constants';

export const Authenticate = {
	isAuthenticated() {
		try {
			let token = localStorage.getItem(AUTH_TOKEN);
			token = jwtDecode(token);
			return !!token && !!token.id;
		} catch (e) {
			return false;
		}
	}
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => (
			Authenticate.isAuthenticated() === true
				? <Component {...props} />
				: (
					<Redirect to={{
						pathname: '/login',
						state: { from: props.location }
					}}
					/>
				)
		)}
	/>
);
