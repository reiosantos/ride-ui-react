import ACTION_TYPE from '../../actions';
import { PROPERTY_USER, USER_TYPE_DRIVER } from '../../constants';
import { categorizeRides, renameAttributes, sortRides } from '../../utils/reducerUtils';

const initialState = {
	error: '',
	success: '',
	rides: [],
	rideSelections: [],
	requests: [],
	summary: {
		totalRequests: 0,
		ridesTaken: 0,
		ridesGiven: 0
	}
};

const filterDriverRides = (ride) => {
	const user = JSON.parse(localStorage.getItem(PROPERTY_USER)) || {};

	if (user.user_type === USER_TYPE_DRIVER) {
		if (ride.driver_id === user.user_id) {
			return ride;
		}
		return {};
	} 
	return ride;
	
};

const ridesReducer = (state = initialState, action) => {

	const {
		error_message: error, success_message: success, rides, requests 
	} = action.payload || {};
	let rideList = rides || state.rides;
	let requestList = requests || [];

	requestList = Array.isArray(requestList) ? requestList
		: [requestList];

	rideList = rideList
		.map(ride => filterDriverRides(ride))
		.filter(ride => Object.keys(ride).length !== 0);

	requestList = requestList.map(ride => filterDriverRides(ride));

	const dataArray = categorizeRides(rideList);

	const data = {
		error,
		success,
		rides: dataArray[0].sort(sortRides),
		rideSelections: rideList.map(ride => renameAttributes(ride)).sort(sortRides),
		requests: requestList.map(ride => renameAttributes(ride)).sort(sortRides),
		summary: { ...state.summary, ...dataArray[1], totalRequests: requestList.length }
	};

	switch (action.type) {
		case ACTION_TYPE.ADD_NEW_RIDE:
			return {
				...state,
				error,
				success,
				rides: data.rides,
				rideSelections: data.rideSelections,
				summary: data.summary
			};

		case ACTION_TYPE.DELETE_RIDE:
			return { ...state, ...data };

		case ACTION_TYPE.RIDE_ERRORS:
			return { ...state, success, error };

		case ACTION_TYPE.VIEW_ALL_REQUESTS:
			return {
				...state,
				error,
				success,
				requests: data.requests,
				summary: { ...data.summary, totalRequests: data.summary.totalRequests } 
			};
		default:
			return { ...state };
	}
};

export default ridesReducer;
