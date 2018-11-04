import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import { Authenticate } from '../../privateRoute/index';

class Logout extends React.Component {

	componentWillMount() {
		const { dispatch } = this.props;
		Authenticate.logout(dispatch);
	}

	render() {
		return <Redirect to="/" />;
	}
}

Logout.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export { Logout as LogoutTest };

export default withRouter(connect()(Logout));
