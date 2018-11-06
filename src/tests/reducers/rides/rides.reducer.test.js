// noinspection ES6CheckImport
import { EnhancerOptions as undefined } from 'redux-devtools-extension';
import ACTION_TYPE from '../../../actions';
import ridesReducer, { categorizeRides } from '../../../reducers/rides';

describe('Rides reduces', () => {

	it('should test add rides reducer', () => {
		const expected = {
			error: undefined, rides: [], success: undefined, summary: { ridesGiven: 0, ridesTaken: 0 } 
		};

		const actionSignup = { type: ACTION_TYPE.ADD_NEW_RIDE, payload: { user: {} } };

		expect(ridesReducer(undefined, actionSignup)).toEqual(expected);
	});

	it('should test exta reducer functions', () => {
		expect(categorizeRides([])).toEqual([[], { ridesGiven: 0, ridesTaken: 0 }]);
		expect(categorizeRides([{}])).toEqual([[{ category: 'Invalid date' }, {
			departureTime: 'Invalid date', id: NaN, postDate: 'Invalid date', tripFrom: undefined 
		}], { ridesGiven: 1, ridesTaken: 0 }]);

		expect(categorizeRides([
			{ status: 'taken', post_date: '2015-12-12' },
			{ status: 'taken', post_date: '2015-12-12' }
		])).toEqual([[{ category: 'Sat, Dec 12th 2015' }, {
			departureTime: 'Invalid date', id: 'undefined2015-12-12', postDate: 'Sat, Dec 12th 2015', post_date: '2015-12-12', status: 'taken', tripFrom: undefined 
		}, {
			departureTime: 'Invalid date', id: 'undefined2015-12-12', postDate: 'Sat, Dec 12th 2015', post_date: '2015-12-12', status: 'taken', tripFrom: undefined 
		}], { ridesGiven: 2, ridesTaken: 2 }]);

	});
});
