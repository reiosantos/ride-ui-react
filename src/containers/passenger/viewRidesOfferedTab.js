import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { rideRequestAction, ridesAction } from '../../actions/rides';
import AllRidesTablePassenger from '../../components/passenger/table/allRidesTablePassenger';
import CircularIntegration from '../../components/progress';
import { API } from '../../constants';
import { formatUrl } from '../../utils';

class ViewRidesOfferedTab extends React.Component {

	constructor(props) {
		super(props);
		const { rows } = props;
		this.state = {
			rows,
			page: 0,
			rowsPerPage: 5,
			loader: {
				success: false,
				loading: true
			}
		};
	}

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(ridesAction({}, 'GET'));
	}

	componentWillReceiveProps(nextProps, nextState) {
		const { rows } = nextProps;
		this.setState({
			rows, loader: { loading: false, success: true }
		});
	}

	handleChangePage = (event, page) => {
		this.setState({ page });
	};

	handleChangeRowsPerPage = (event) => {
		this.setState({ rowsPerPage: event.target.value });
	};

	onClickSend = rideId => (event) => {
		const { dispatch } = this.props;
		this.setState({ loader: { loading: true, success: false } });
		dispatch(rideRequestAction({}, formatUrl(API.POST_FETCH_RIDE_REQUESTS_URL, [rideId]), 'POST', rideId));
	};

	render() {
		const {
			rows, rowsPerPage, page, loader
		} = this.state;

		return (
			<Fragment>
				<CircularIntegration {...loader} />

				<AllRidesTablePassenger
					page={page}
					onClickSend={this.onClickSend}
					handleChangePage={this.handleChangePage}
					handleChangeRowsPerPage={this.handleChangeRowsPerPage}
					rows={rows}
					ridesOffered
					rowsPerPage={rowsPerPage}
				/>
			</Fragment>
		);
	}
}

ViewRidesOfferedTab.propTypes = {
	rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	dispatch: PropTypes.func.isRequired

};

const mapStateToProps = state => (
	{
		rows: state.ridesReducer.rides,
		...state.ridesReducer.summary
	});
export { ViewRidesOfferedTab as ViewRidesOfferedTabTest };

export default connect(mapStateToProps)(ViewRidesOfferedTab);
