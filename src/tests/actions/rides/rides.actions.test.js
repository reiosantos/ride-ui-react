import moxios from 'moxios';
import { EnhancerOptions as undefined } from 'redux-devtools-extension';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { rideRequestAction, ridesAction } from '../../../actions/rides';
import { API } from '../../../constants';
import { formatUrl } from '../../../utils';

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

		const expectedActions = [{ payload: { success_message: 'message' }, type: 'DELETE_RIDE' }];

		store.dispatch(ridesAction(userData, 'post')).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('failed ride add with incomplete data', () => {
		moxios.stubRequest(API.ADD_AND_RETRIEVE_RIDES_URL, {
			status: 400
		});

		const expectedActions = [{ payload: {}, type: 'RIDE_ERRORS' }];

		store.dispatch(ridesAction({})).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('delete ride data to cover get requests', () => {
		moxios.stubRequest(`${API.ADD_AND_RETRIEVE_RIDES_URL}`, {
			status: 200,
			response: { data: {} }
		});

		const expectedActions = [{ payload: { data: {}, rides: {} }, type: 'ADD_NEW_RIDE' }, { type: 'VIEW_ALL_RIDES' }];

		store.dispatch(ridesAction({})).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('delete ride data else part', () => {
		moxios.stubRequest(`${API.ADD_AND_RETRIEVE_RIDES_URL}`, {
			status: 200,
			response: { data: {} }
		});

		const expectedActions = [{ payload: { data: {} }, type: 'DELETE_RIDE' }];

		store.dispatch(ridesAction({}, 'DELETE', `${API.ADD_AND_RETRIEVE_RIDES_URL}`)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('fetch ride request data', () => {
		moxios.stubRequest(`${formatUrl(API.POST_FETCH_RIDE_REQUESTS_URL, ['R2134', 'RT342'])}`, {
			status: 200,
			response: {
				data: {}
			}
		});

		const expectedActions = [{ payload: { requests: {} }, type: 'VIEW_ALL_REQUESTS' }, { payload: { data: {} }, type: 'RIDE_ERRORS' }];

		store.dispatch(rideRequestAction({}, `${formatUrl(API.POST_FETCH_RIDE_REQUESTS_URL, ['R2134', 'RT342'])}`)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('delete ride request data errors', () => {
		moxios.stubRequest(`${formatUrl(API.POST_FETCH_RIDE_REQUESTS_URL, ['R2134', 'RT342'])}`, {
			status: 400
		});

		const expectedActions = [{ payload: {}, type: 'RIDE_ERRORS' }];

		store.dispatch(rideRequestAction({}, `${formatUrl(API.POST_FETCH_RIDE_REQUESTS_URL, ['R2134', 'RT342'])}`)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('delete ride request data success', () => {
		moxios.stubRequest(`${formatUrl(API.POST_FETCH_RIDE_REQUESTS_URL, ['R2134', 'RT342'])}`, {
			status: 200,
			response: {
				data: {}
			}
		});

		const expectedActions = [{ payload: { requests: {} }, type: 'VIEW_ALL_REQUESTS' }, { payload: { data: {} }, type: 'RIDE_ERRORS' }];

		store.dispatch(rideRequestAction({}, `${formatUrl(API.POST_FETCH_RIDE_REQUESTS_URL, ['R2134', 'RT342'])}`, 'delete')).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('delete ride request data success', () => {
		moxios.stubRequest(`${formatUrl(API.POST_FETCH_RIDE_REQUESTS_URL, ['R2134'])}`, {
			status: 200,
			response: {
				data: {}
			}
		});

		const expectedActions = [{ payload: { requests: {} }, type: 'VIEW_ALL_REQUESTS' }, { payload: { data: {} }, type: 'RIDE_ERRORS' }];

		store.dispatch(rideRequestAction({}, `${formatUrl(API.POST_FETCH_RIDE_REQUESTS_URL, ['R2134'])}`, 'post')).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

});
