import ACTION_TYPE from '../../actions';
import { formatDate } from '../../utils';

const initialState = {
	error: '',
	success: '',
	rides: [],
	summary: {
		ridesTaken: 0,
		ridesGiven: 0
	}
};

export const deepFlatten = (array) => {
	let result = [];

	array.forEach((elem) => {
		if (Array.isArray(elem)) {
			result = result.concat(deepFlatten(elem));
		} else {
			result.push(elem);
		}
	});

	return result;
};

export const categorizeRides = (data) => {
	const rides = {};
	const summary = { ridesTaken: 0, ridesGiven: data.length };

	data.forEach((ride) => {
		const dateKey = formatDate(ride.post_date);

		if (!Object.prototype.hasOwnProperty.call(rides, dateKey)) {
			rides[dateKey] = [];
			rides[dateKey].push({ category: dateKey });
		}
		if (ride.status === 'taken') {
			summary.ridesTaken += 1;
		}
		rides[dateKey].push({
			...ride,
			id: ride.departure_time + ride.post_date,
			departureTime: formatDate(ride.departure_time),
			tripFrom: ride.trip_from,
			postDate: formatDate(ride.post_date)
		});
	});

	return [deepFlatten(Object.keys(rides).map(key => rides[key])), summary];
};

const ridesReducer = (state = initialState, action) => {

	const { error_message: error, success_message: success, rides } = action.payload || {};
	const rideList = rides || [];

	const dataArray = categorizeRides(rideList);

	const data = {
		error,
		success,
		rides: dataArray[0],
		summary: dataArray[1]
	};

	switch (action.type) {
		case ACTION_TYPE.ADD_NEW_RIDE:
			return { ...state, ...data };

		default:
			return { ...state };
	}
};

export default ridesReducer;
