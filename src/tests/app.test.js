import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App, { AppTest } from '../components/app/app';
import NavBar from '../components/navBar';
import { USER_TYPE_DRIVER } from '../constants';
import '../index';

const mockStore = configureStore([thunk]);
let store;

describe('App component', () => {
	beforeEach(() => {
		store = mockStore({
			authReducer: {
				user: {
					userType: USER_TYPE_DRIVER
				}
			},
			ridesReducer: {
				newRide: {},
				rides: [{ category: 'we' }, { rideId: 'f45' }],
				requests: [{ rideId: 'f45' }],
				rideSelections: [{ rideId: 'f45' }],
				summary: {
					ridesGiven: 0,
					ridesTaken: 0,
					totalRequests: 0
				}
			}
		});
	});

	it('renders without crashing', () => {
		const wrapper = shallow(<AppTest auth={{ user: {} }} />);
		expect(wrapper).toHaveLength(1);
		// noinspection JSCheckFunctionSignatures
		const fn = jest.spyOn(wrapper.instance(), 'onUnLoad');
		wrapper.instance().onUnLoad({});
		expect(fn).toHaveBeenCalled();
		wrapper.unmount();

		expect(mount(
			<MemoryRouter>
				<Provider store={store}>
					<NavBar classes={{}} />
				</Provider>
			</MemoryRouter>
		)).toHaveLength(1);
	});

	it('renders APP without crashing', () => {
		expect(mount(
			<MemoryRouter>
				<Provider store={store}>
					<App classes={{}} />
				</Provider>
			</MemoryRouter>
		)).toHaveLength(1);
	});

});
