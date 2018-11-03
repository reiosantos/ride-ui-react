import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import AppTheme from '../themes';
import ButtonAppBar from './appNavBar';

const App = () => (
	<MuiThemeProvider theme={AppTheme}>
		<ButtonAppBar />
	</MuiThemeProvider>
);

export default App;
