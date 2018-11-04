import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/app/app';
import { PrivateRoute } from '../privateRoute';

const Routes = () => (
	<Router>
		<Switch>
			<Route component={App} path="/login" exact />
			<PrivateRoute component={App} path="/" exact />
		</Switch>
	</Router>
);

export default Routes;
