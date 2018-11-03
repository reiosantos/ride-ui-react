import ReactDOM from 'react-dom';
import './static/styles/index.scss';
import React from 'react';
import { Provider } from 'react-redux';
import App from './app/App';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
