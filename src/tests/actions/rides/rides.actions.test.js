import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ridesAction } from '../../../actions/rides';
import { API } from '../../../constants';

const mockStore = configureStore([thunk]);
let store;

describe('Rides Actions', () => {
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

	it('success full add ride', () => {
		moxios.stubRequest(API.ADD_AND_RETRIEVE_RIDES_URL, {
			status: 200,
			response: {
				success_message: 'message'
			}
		});
		const userData = {};

		const expectedActions = [{ payload: { rides: [], success_message: 'message' }, type: 'ADD_NEW_RIDE' }, { type: 'VIEW_ALL_RIDES' }];

		store.dispatch(ridesAction(userData, 'post')).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('failed signup with incomplete data', () => {
		moxios.stubRequest(API.ADD_AND_RETRIEVE_RIDES_URL, {
			status: 400
		});

		const expectedActions = [{ payload: {}, type: 'RIDE_ERRORS' }];

		store.dispatch(ridesAction({})).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

});
