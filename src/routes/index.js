import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/app/app';
import Logout from '../containers/auth/logout';
import LogIn from '../containers/auth/login';
import SignUp from '../containers/auth/signup';
import { PrivateRoute } from '../privateRoute';

const Routes = () => (
	<Router>
		<Switch>
			<Route component={LogIn} path="/login" exact />
			<Route component={SignUp} path="/signup" exact />
			<PrivateRoute component={Logout} path="/logout" exact />
			<PrivateRoute component={App} path="/" exact />
			<PrivateRoute component={App} path="*" />
		</Switch>
	</Router>
);

export default Routes;
