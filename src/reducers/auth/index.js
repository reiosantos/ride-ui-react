/* eslint-disable camelcase */
import ACTION_TYPE from '../../actions';
import { PROPERTY_USER } from '../../constants';

const initialState = {
	user: JSON.parse(localStorage.getItem(PROPERTY_USER)),
	error: '',
	success: ''
};

const authReducer = (state = initialState, action) => {

	const { user, error_message, success_message } = action.payload || {};

	switch (action.type) {
		case ACTION_TYPE.SIGN_UP:
			return {
				...state,
				user: user || initialState.user,
				error: error_message,
				success: success_message
			};

		case ACTION_TYPE.LOG_OUT:
			return { ...initialState };

		default:
			return state;
	}
};

export default authReducer;
