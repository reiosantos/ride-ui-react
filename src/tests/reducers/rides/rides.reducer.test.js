import { EnhancerOptions as undefined } from 'redux-devtools-extension';
import ACTION_TYPE from '../../../actions';
import ridesReducer from '../../../reducers/rides';

describe('Rides reduces', () => {

	it('should test add rides reducer', () => {
		const expected = { error: undefined, rides: undefined, success: undefined };

		const actionSignup = { type: ACTION_TYPE.ADD_NEW_RIDE, payload: { user: {} } };

		expect(ridesReducer(undefined, actionSignup)).toEqual(expected);
	});
});
