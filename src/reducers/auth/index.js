/* eslint-disable camelcase */
import ACTION_TYPE from '../../actions';
import { getCurrentUser } from '../../utils';

const initialState = {
	user: getCurrentUser(),
	error: '',
	success: ''
};

const authReducer = (state = initialState, action) => {

	const { user, error_message, success_message } = action.payload || {};
	const {
		contact, full_name, registration_date, user_type, username
	} = user || initialState.user;
	const userObject = {
		phoneNumber: contact,
		fullNames: full_name,
		registrationDate: registration_date,
		userType: user_type,
		username
	};

	switch (action.type) {
		case ACTION_TYPE.SIGN_UP:
			return {
				...state,
				user: userObject,
				error: error_message,
				success: success_message
			};

		case ACTION_TYPE.LOG_OUT:
			return { ...initialState };

		default:
			return { ...state, user: userObject };
	}
};

export default authReducer;
