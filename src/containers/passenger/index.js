import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PassengerPage from '../../components/passenger/passengerPage';
import CircularIntegration from '../../components/progress';
import CustomizedSnackBar from '../../components/snackBar';

class Passenger extends React.Component {

	snack = {
		message: '',
		open: false,
		variant: 'info'
	};

	initialState = {
		loader: {
			success: false,
			loading: false
		}
	};

	constructor(props) {
		super(props);
		this.state = this.initialState;
	}

	componentWillReceiveProps(nextProps, nextState) {
		const { newRide } = nextProps;
		const { error, success } = newRide;

		if (error || success) {
			this.snack.message = error || success;
			this.snack.open = true;
			this.snack.variant = error ? 'error' : 'success';
			this.setState({ loader: { loading: false, success: true } });
		} else {
			this.snack.open = false;
		}

		if (success) {
			this.setState({ ...this.initialState });
		}
	}

	handleSnackClose = (event, reason) => {
		this.snack.open = false;
		this.setState({});
	};

	render() {
		const { loader } = this.state;
		const { open, message, variant } = this.snack;

		return (
			<Fragment>
				<CircularIntegration {...loader} />

				<CustomizedSnackBar
					variant={variant}
					open={open}
					handleClose={this.handleSnackClose}
					message={message}
				/>

				<PassengerPage />
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({ newRide: state.ridesReducer });
const mapDispatchToProps = dispatch => ({ dispatch });

export { Passenger as PassengerTest };

export default connect(mapStateToProps, mapDispatchToProps)(Passenger);
