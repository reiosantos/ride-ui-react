import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './app/App';

const Routes = () => (
	<Router>
		<Route component={App} path="/" exact />
	</Router>
);

export default Routes;
