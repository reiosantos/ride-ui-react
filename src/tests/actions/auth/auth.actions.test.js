import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ACTION_TYPE from '../../../actions';
import { authAction, logoutActionCreator } from '../../../actions/auth';
import { API } from '../../../constants';

const mockStore = configureStore([thunk]);
let store;

describe('Auth Actions', () => {
	beforeEach(() => {
		store = mockStore({
			authReducer: {
				user: {}
			}
		});
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('success full signup', () => {
		moxios.stubRequest(API.SIGNUP_URL, {
			status: 200,
			response: {
				success_message: 'message',
				user: {}
			}
		});
		const userData = {
			username: 'reio',
			contact: '02345678998',
			full_name: 'defgrtgr',
			user_type: 'driver',
			password: 'wer5t43rt'
		};

		const expectedActions = [{ payload: { success_message: 'message', user: {} }, type: 'SIGN_UP' }];

		store.dispatch(authAction(userData, API.SIGNUP_URL)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('should return logout action creator', () => {
		expect(store.dispatch(logoutActionCreator())).toEqual({ type: ACTION_TYPE.LOG_OUT });
	});

	it('failed signup with incomplete data', () => {
		moxios.stubRequest(API.SIGNUP_URL, {
			status: 400
		});
		const userData = {
			username: 'reio',
			contact: '02345678998',
			full_name: 'defgrtgr'
		};

		const expectedActions = [{ payload: {}, type: 'SIGN_UP' }];

		store.dispatch(authAction(userData, API.SIGNUP_URL)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

});
