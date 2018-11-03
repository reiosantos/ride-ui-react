import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import './static/styles/index.scss';
import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import AppTheme from './themes';

ReactDOM.render(
	<MuiThemeProvider theme={AppTheme}>
		<Provider store={store}>
			<Routes />
		</Provider>
	</MuiThemeProvider>, document.getElementById('root') || document.createElement('div')
);
