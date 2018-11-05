import { EnhancerOptions as undefined } from 'redux-devtools-extension';
import ACTION_TYPE from '../../../actions';
import authReducer from '../../../reducers/auth';

describe('Auth reduces', () => {

	it('should test signup and logout reducer', () => {
		const expected = {
			error: undefined,
			success: undefined,
			user: {
				fullNames: undefined,
				phoneNumber: undefined,
				registrationDate: undefined,
				userType: undefined,
				username: undefined
			} 
		};
		const expectedLogout = { user: {}, error: '', success: '' };

		const actionSignup = { type: ACTION_TYPE.SIGN_UP, payload: { user: {} } };

		const actionLogout = { type: ACTION_TYPE.LOG_OUT, payload: { user: {} } };

		expect(authReducer(undefined, actionSignup)).toEqual(expected);
		expect(authReducer(undefined, actionLogout)).toEqual(expectedLogout);
	});
});
