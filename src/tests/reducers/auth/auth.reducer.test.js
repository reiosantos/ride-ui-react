import { EnhancerOptions as undefined } from 'redux-devtools-extension';
import ACTION_TYPE from '../../../actions';
import authReducer from '../../../reducers/auth';

describe('Auth reduces', () => {

	it('should test signup and logout article reducer', () => {
		const expected = { user: null, error: undefined, success: undefined };
		const expectedLogout = { user: null, error: '', success: '' };

		const actionSignup = { type: ACTION_TYPE.SIGN_UP, payload: {} };

		const actionLogout = { type: ACTION_TYPE.LOG_OUT };

		expect(authReducer(undefined, actionSignup)).toEqual(expected);
		expect(authReducer(undefined, actionLogout)).toEqual(expectedLogout);
	});
});
