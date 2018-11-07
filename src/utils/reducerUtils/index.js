import { formatDate } from '../index';

const deepFlatten = (array) => {
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

const renameAttributes = ride => ({
	...ride,
	id: ride.departure_time + ride.post_date + ride.request_id,
	departureTime: formatDate(ride.departure_time),
	tripFrom: ride.trip_from,
	postDate: formatDate(ride.post_date),
	rideId: ride.ride_id,
	requestId: ride.request_id
});

const categorizeRides = (data) => {
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
		rides[dateKey].push(renameAttributes(ride));
	});

	return [deepFlatten(Object.keys(rides).map(key => rides[key])), summary];
};

export {
	renameAttributes,
	categorizeRides
};
