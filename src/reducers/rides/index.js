import ACTION_TYPE from '../../actions';
import { categorizeRides, renameAttributes } from '../../utils/reducerUtils';

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

const ridesReducer = (state = initialState, action) => {

	const {
		error_message: error, success_message: success, rides, requests 
	} = action.payload || {};
	const rideList = rides || state.rides;
	let requestList = requests || [];

	requestList = Array.isArray(requestList) ? requestList
		: [requestList];

	const dataArray = categorizeRides(rideList);

	const data = {
		error,
		success,
		rides: dataArray[0],
		rideSelections: rideList.map(ride => renameAttributes(ride)),
		requests: requestList.map(ride => renameAttributes(ride)),
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
