// noinspection ES6CheckImport
import { EnhancerOptions as undefined } from 'redux-devtools-extension';
import ACTION_TYPE from '../../../actions';
import ridesReducer from '../../../reducers/rides';
import { categorizeRides, sortRides } from '../../../utils/reducerUtils';

describe('Rides reduces', () => {

	it('should test add rides reducer', () => {
		const expected = {
			error: undefined,
			requests: [],
			rideSelections: [],
			rides: [],
			success: undefined,
			summary: { ridesGiven: 0, ridesTaken: 0, totalRequests: 0 }
		};

		const actionSignup = { type: ACTION_TYPE.ADD_NEW_RIDE, payload: { user: {} } };

		expect(ridesReducer(undefined, actionSignup)).toEqual(expected);

		const actionDelete = { type: ACTION_TYPE.DELETE_RIDE, payload: { } };

		expect(ridesReducer(undefined, actionDelete)).toEqual(expected);

		const actionError = { type: ACTION_TYPE.RIDE_ERRORS, payload: { } };

		expect(ridesReducer(undefined, actionError)).toEqual(expected);

		const actionView = { type: ACTION_TYPE.VIEW_ALL_REQUESTS, payload: { } };

		expect(ridesReducer(undefined, actionView)).toEqual(expected);
	});

	it('should test add rides request reducer', () => {
		const expected = {
			error: undefined,
			requests: [{
				cost: undefined,
				departureTime: 'Invalid date',
				id: NaN,
				passengerContact: undefined,
				passengerId: undefined,
				passengerName: undefined,
				postDate: 'Invalid date',
				requestDate: 'Invalid date',
				requestId: undefined,
				requestStatus: undefined,
				rideId: undefined,
				tripFrom: undefined
			}],
			rideSelections: [],
			rides: [],
			success: undefined,
			summary: { ridesGiven: 1, ridesTaken: 0, totalRequests: 1 } 
		};

		const actionView = {
			type: ACTION_TYPE.VIEW_ALL_REQUESTS,
			payload: { requests: {}, rides: [{}] }
		};

		expect(ridesReducer(undefined, actionView)).toEqual(expected);
	});

	it('should test exta reducer functions', () => {
		expect(categorizeRides([])).toEqual([[], { ridesGiven: 0, ridesTaken: 0 }]);
		expect(categorizeRides([{}])).toEqual([[{ category: 'Invalid date', post_date: undefined }, {
			cost: undefined, departureTime: 'Invalid date', id: NaN, passengerContact: undefined, passengerId: undefined, passengerName: undefined, postDate: 'Invalid date', requestDate: 'Invalid date', requestId: undefined, requestStatus: undefined, rideId: undefined, tripFrom: undefined 
		}], { ridesGiven: 1, ridesTaken: 0 }]);

		expect(categorizeRides([
			{ status: 'taken', post_date: '2015-12-12', category: 'wer' },
			{ status: 'taken', post_date: '2015-12-12' }
		])).toEqual([[{ category: 'Sat, Dec 12th 2015', post_date: '2015-12-12' }, {
			category: 'wer', cost: undefined, departureTime: 'Invalid date', id: 'undefined2015-12-12undefined', passengerContact: undefined, passengerId: undefined, passengerName: undefined, postDate: 'Sat, Dec 12th 2015', post_date: '2015-12-12', requestDate: 'Invalid date', requestId: undefined, requestStatus: undefined, rideId: undefined, status: 'taken', tripFrom: undefined 
		}, {
			cost: undefined, departureTime: 'Invalid date', id: 'undefined2015-12-12undefined', passengerContact: undefined, passengerId: undefined, passengerName: undefined, postDate: 'Sat, Dec 12th 2015', post_date: '2015-12-12', requestDate: 'Invalid date', requestId: undefined, requestStatus: undefined, rideId: undefined, status: 'taken', tripFrom: undefined 
		}], { ridesGiven: 1, ridesTaken: 2 }]);

		sortRides({ postDate: '123' }, { postDate: '1234' });
		sortRides({ postDate: 321 }, { postDate: 4 });

	});
});
