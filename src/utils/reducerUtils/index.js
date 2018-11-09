import { formatDate } from '..';

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
	cost: ride.trip_cost || ride.cost,
	requestDate: formatDate(ride.request_date),
	requestId: ride.request_id,
	passengerId: ride.passenger_id,
	passengerName: ride.passenger_name,
	passengerContact: ride.passenger_contact,
	requestStatus: ride.request_status
});

const categorizeRides = (data) => {
	const rides = {};
	let count = 0;

	data.forEach((row) => {
		if (!row.category) {
			count += 1;
		}
	});
	const summary = { ridesTaken: 0, ridesGiven: count };

	data.forEach((ride) => {
		const dateKey = formatDate(ride.post_date);

		if (!Object.prototype.hasOwnProperty.call(rides, dateKey)) {
			rides[dateKey] = [];
			rides[dateKey].push({ category: dateKey, post_date: ride.post_date });
		}
		if (ride.status === 'taken') {
			summary.ridesTaken += 1;
		}
		rides[dateKey].push(renameAttributes(ride));
	});

	return [deepFlatten(Object.keys(rides).map(key => rides[key])), summary];
};

const sortRides = (a, b) => {
	if (a.post_date > b.post_date) {
		return -1;
	}
	if (a.post_date < b.post_date) {
		return 1;
	}
	return 0;
};

export {
	renameAttributes,
	categorizeRides,
	sortRides
};
