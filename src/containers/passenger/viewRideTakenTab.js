import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { rideRequestAction } from '../../actions/rides';
import AllRidesTablePassenger from '../../components/passenger/table/allRidesTablePassenger';
import CircularIntegration from '../../components/progress';
import RideSelectForm from '../../components/rides/rideSelectForm';
import { API } from '../../constants';
import { formatUrl } from '../../utils';

class ViewRideTakenTab extends React.Component {

	constructor(props) {
		super(props);
		const {
			rows, rides
		} = props;
		this.state = {
			rows,
			rides,
			page: 0,
			selectValue: '',
			rowsPerPage: 5,
			loader: {
				success: false,
				loading: false
			}
		};
	}

	componentWillReceiveProps(nextProps, nextContext) {
		const {
			rows, rides
		} = nextProps;
		this.setState({
			rows, rides, loader: { loading: false, success: true }
		});
	}

	onSelectRide = (event) => {
		const { dispatch } = this.props;
		const { value } = event.target;
		this.setState({ selectValue: value, loader: { loading: true, success: false } });
		this.forceUpdate();
		dispatch(rideRequestAction({}, formatUrl(API.POST_FETCH_RIDE_REQUESTS_URL, [value]), 'get', value));
	};

	handleChangePage = (event, page) => {
		this.setState({ page });
	};

	handleChangeRowsPerPage = (event) => {
		this.setState({ rowsPerPage: event.target.value });
	};

	onClickRequest = (rideId, requestId, status) => (event) => {
		event.preventDefault();
		this.setState({ loader: { loading: true, success: false } });
		const { dispatch } = this.props;
		dispatch(rideRequestAction({ status }, formatUrl(API.UPDATE_RIDE_REQUESTS_URL, [rideId, requestId]), 'PUT', rideId));
	};

	render() {
		const {
			rows, rides, rowsPerPage, page, loader, ridesGiven, ridesTaken, totalRequests, selectValue
		} = this.state;

		return (
			<Fragment>
				<CircularIntegration {...loader} />

				<RideSelectForm rows={rides} selectValue={selectValue} onSelectRide={this.onSelectRide} />
				<AllRidesTablePassenger
					page={page}
					handleChangePage={this.handleChangePage}
					handleChangeRowsPerPage={this.handleChangeRowsPerPage}
					rows={rows}
					rowsPerPage={rowsPerPage}
					ridesTaken={ridesTaken}
					totalRequests={totalRequests}
					ridesGiven={ridesGiven}
					isViewRequest
					onClickDelete={this.onClickRequest}
				/>
			</Fragment>
		);
	}
}

ViewRideTakenTab.propTypes = {
	rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	rides: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	dispatch: PropTypes.func.isRequired,
	totalRequests: PropTypes.number.isRequired

};

const mapStateToProps = state => (
	{
		...state,
		rows: state.ridesReducer.requests,
		rides: state.ridesReducer.rideSelections,
		...state.ridesReducer.summary
	});
export { ViewRideTakenTab as ViewRideTakenTabTest };

export default connect(mapStateToProps)(ViewRideTakenTab);
