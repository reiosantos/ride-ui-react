/* eslint-disable camelcase */
import ACTION_TYPE from '../../actions';

const initialState = {
	error: '',
	success: '',
	rides: []
};

const ridesReducer = (state = initialState, action) => {

	const { error_message: error, success_message: success, rides } = action.payload || {};

	const data = {
		error,
		success,
		rides
	};

	switch (action.type) {
		case ACTION_TYPE.ADD_NEW_RIDE:
			return { ...state, ...data };

		default:
			return { ...state };
	}
};

export default ridesReducer;
