import React, { Fragment } from 'react';
import NavBar from '../navBar';

class App extends React.Component {

	componentWillMount() {
		onbeforeunload = this.onUnLoad;
	}

	componentWillUnmount() {
		onbeforeunload = null;
	}

	onUnLoad = e => 'You\'ll loose your data!';

	render() {
		return (
			<Fragment>
				<NavBar />
			</Fragment>
		);
	}
}
export default App;
