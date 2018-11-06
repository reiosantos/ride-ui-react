import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ridesAction } from '../../actions/rides';
import DriverPage from '../../components/driver/driverPage';
import CircularIntegration from '../../components/progress';
import CustomizedSnackBar from '../../components/snackBar';
import { capitalizeWord } from '../../utils';
import { validateAmount, validateDateTime, validateUsername } from '../../utils/validators';

class Driver extends React.Component {

	snack = {
		message: '',
		open: false,
		variant: 'info'
	};

	initialState = {
		tripDestination: '',
		tripFrom: '',
		tripCost: '',
		tripDepartTime: '',
		errors: {
			tripDestination: '',
			tripFrom: '',
			tripCost: '',
			tripDepartTime: ''
		},
		loader: {
			success: false,
			loading: false
		}
	};

	validators = {
		validateTripFrom: validateUsername,
		validateTripDestination: validateUsername,
		validateTripCost: validateAmount,
		validateTripDepartTime: validateDateTime
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

	onSubmit = (event) => {
		event.preventDefault();
		const { dispatch } = this.props;

		if (!this.formHasError()) {
			dispatch(ridesAction(this.state, 'POST'));
			this.setState({ loader: { loading: true } });
		}
	};

	handleSnackClose = (event, reason) => {
		this.snack.open = false;
		this.setState({});
	};

	formHasError = () => {
		const {
			tripDestination, tripFrom, tripCost, tripDepartTime 
		} = this.state;

		return !!(
			validateAmount(tripCost) ||
			validateUsername(tripFrom) ||
			validateUsername(tripDestination) ||
			validateDateTime(tripDepartTime)
		);
	};

	onChange = name => (event) => {
		const { value } = event.target;
		this.setState(prevState => ({
			[name]: value,
			errors: {
				...prevState.errors,
				[name]: this.validators[`validate${capitalizeWord(name)}`](value)
			}
		}));
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

				<DriverPage
					formHasError={this.formHasError}
					onSubmit={this.onSubmit}
					onChange={this.onChange}
					{...this.state}
				/>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({ newRide: state.ridesReducer });
const mapDispatchToProps = dispatch => ({ dispatch });

export { Driver as DriverTest };

export default connect(mapStateToProps, mapDispatchToProps)(Driver);
