import axios from 'axios';
import ACTION_TYPE from '..';
import { API } from '../../constants';
import { addToken } from '../../utils';

export const addNewRideActionCreator = data => ({
	type: ACTION_TYPE.ADD_NEW_RIDE,
	payload: data
});

export const rideErrorsActionCreator = data => ({
	type: ACTION_TYPE.RIDE_ERRORS,
	payload: data
});

export const viewAllRidesActionCreator = () => ({
	type: ACTION_TYPE.VIEW_ALL_RIDES
});

export const ridesAction = (requestData, method = 'get') => (dispatch) => {
	addToken();

	const {
		tripFrom, tripDestination, tripCost, tripDepartTime
	} = requestData;

	const userData = {
		depart_time: tripDepartTime,
		cost: tripCost,
		trip_from: tripFrom,
		destination: tripDestination
	};

	return axios({ method, url: API.ADD_AND_RETRIEVE_RIDES_URL, data: { ...userData } })
		.then(response => response.data)
		.then((response) => {

			dispatch(addNewRideActionCreator(response));
			dispatch(viewAllRidesActionCreator(response));
		})
		.catch((error) => {
			const { data } = error.response;
			dispatch(rideErrorsActionCreator(data || {}));
		});
};
