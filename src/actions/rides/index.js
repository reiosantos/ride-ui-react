import axios from 'axios';
import ACTION_TYPE from '..';
import { API } from '../../constants';
import { addToken, formatUrl } from '../../utils';

export const addNewRideActionCreator = data => ({
	type: ACTION_TYPE.ADD_NEW_RIDE,
	payload: {
		...data,
		rides: !Array.isArray(data.data) && (typeof data.data !== 'object') ? [] : data.data
	}
});

export const rideErrorsActionCreator = data => ({
	type: ACTION_TYPE.RIDE_ERRORS,
	payload: data
});

export const viewAllRidesActionCreator = () => ({
	type: ACTION_TYPE.VIEW_ALL_RIDES
});

export const deleteRideActionCreator = data => ({
	type: ACTION_TYPE.DELETE_RIDE,
	payload: data
});

export const viewAllRequestsActionCreator = requests => ({
	type: ACTION_TYPE.VIEW_ALL_REQUESTS,
	payload: { requests }
});

export const ridesAction = (requestData, method = 'get', URL = API.ADD_AND_RETRIEVE_RIDES_URL) => (dispatch) => {
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

	return axios({ method, url: URL, data: { ...userData } })
		.then(response => response.data)
		.then((response) => {

			if (method.toLowerCase() !== 'get') {
				dispatch(ridesAction({}));
				dispatch(deleteRideActionCreator(response));
			} else {
				dispatch(addNewRideActionCreator(response));
				dispatch(viewAllRidesActionCreator(response));
			}
		})
		.catch((error) => {
			const { data } = error.response;
			dispatch(rideErrorsActionCreator(data || {}));
		});
};

export const rideRequestAction = (requestData, URL, method = 'get', rideId) => (dispatch) => {
	addToken();

	const instance = axios.create({ headers: { 'Content-Type': 'application/json' } });

	let inst = method.toLowerCase() === 'get' ? instance.get(URL, requestData) : instance.put(URL, requestData);
	inst = method.toLowerCase() === 'post' ? instance.post(URL, requestData) : inst;

	return inst
		.then(response => response.data)
		.then((response) => {

			if (method !== 'get') {
				dispatch(rideRequestAction({}, formatUrl(API.POST_FETCH_RIDE_REQUESTS_URL, [rideId]), 'get'));
			}
			dispatch(viewAllRequestsActionCreator(response.data));
			dispatch(rideErrorsActionCreator(response || {}));
		})
		.catch((error) => {
			const { data } = error.response;
			dispatch(rideErrorsActionCreator(data || {}));
		});
};

