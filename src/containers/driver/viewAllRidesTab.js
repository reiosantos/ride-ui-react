import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ridesAction } from '../../actions/rides';
import CircularIntegration from '../../components/progress';
import AllRidesTable from '../../components/table/allRidesTable';
import { API } from '../../constants';
import { formatUrl } from '../../utils';

class ViewAllRidesTab extends React.Component {

	constructor(props) {
		super(props);
		const { rows, ridesGiven = 0, ridesTaken = 0 } = props;
		this.state = {
			rows,
			page: 0,
			rowsPerPage: 5,
			ridesGiven,
			ridesTaken,
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
		const { rows, ridesGiven, ridesTaken } = nextProps;
		this.setState({
			rows, ridesGiven, ridesTaken, loader: { loading: false, success: true } 
		});
	}

	handleChangePage = (event, page) => {
		this.setState({ page });
	};

	handleChangeRowsPerPage = (event) => {
		this.setState({ rowsPerPage: event.target.value });
	};

	onClickDelete = value => (event) => {
		event.preventDefault();
		this.setState({ loader: { loading: true, success: false } });
		const { dispatch } = this.props;
		dispatch(ridesAction({}, 'DELETE', formatUrl(API.DELETE_RIDE_URL, [value])));
	};

	render() {
		const {
			rows, rowsPerPage, page, loader, ridesGiven, ridesTaken
		} = this.state;

		return (
			<Fragment>
				<CircularIntegration {...loader} />

				<AllRidesTable
					page={page}
					handleChangePage={this.handleChangePage}
					handleChangeRowsPerPage={this.handleChangeRowsPerPage}
					rows={rows}
					rowsPerPage={rowsPerPage}
					ridesTaken={ridesTaken}
					ridesGiven={ridesGiven}
					onClickDelete={this.onClickDelete}
				/>
			</Fragment>
		);
	}
}

ViewAllRidesTab.propTypes = {
	rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	dispatch: PropTypes.func.isRequired,
	ridesTaken: PropTypes.number.isRequired,
	ridesGiven: PropTypes.number.isRequired

};

const mapStateToProps = state => (
	{
		rows: state.ridesReducer.rides,
		...state.ridesReducer.summary
	});
export { ViewAllRidesTab as ViewAllRidesTabTest };

export default connect(mapStateToProps)(ViewAllRidesTab);
