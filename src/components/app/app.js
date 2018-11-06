import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { USER_TYPE_DRIVER } from '../../constants';
import Driver from '../../containers/driver';
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
		const { auth } = this.props;
		const { user } = auth;
		return (
			<Fragment>
				<NavBar />
				{
					user && user.userType === USER_TYPE_DRIVER
						? <Driver />
						: 'Passenger'
				}
			</Fragment>
		);
	}
}

App.propTypes = {
	auth: PropTypes.shape().isRequired
};

const mapStateToProps = state => ({ auth: state.authReducer });

export { App as AppTest };

export default connect(mapStateToProps)(App);
