import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { TabbedPagePassengerTest } from '../../../components/passenger/tabs/tabbedPagePassenger';
import { PROPERTY_USER } from '../../../constants';
import Passenger, { PassengerTest } from '../../../containers/passenger';
import ViewRidesOfferedTab, { ViewRidesOfferedTabTest } from '../../../containers/passenger/viewRidesOfferedTab';
import ViewRideTakenTab, { ViewRideTakenTabTest } from '../../../containers/passenger/viewRideTakenTab';

let wrapper;
const mockStore = configureStore([thunk]);
let store;

describe('Passenger Container', () => {

	beforeEach(() => {
		store = mockStore({
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
		wrapper = shallow(<PassengerTest dispatch={jest.fn} />);
	});

	it('renders passenger form without crashing', () => {
		expect(wrapper).toHaveLength(1);
		wrapper.setProps({ newRide: { error: '', success: 'yes' } });
		wrapper.setProps({ newRide: { error: 'no', success: '' } });
		wrapper.setProps({ newRide: { error: '', success: '' } });
		wrapper.instance().handleSnackClose({}, 'wer');
	});

	it('should mount passenger without crashing', () => {
		expect(mount(
			<Provider store={store}>
				<Passenger />
			</Provider>
		)).toHaveLength(1);
	});

	it('should mount ViewRideTakenTab without crashing', () => {
		expect(mount(
			<Provider store={store}>
				<ViewRideTakenTab />
			</Provider>
		)).toHaveLength(1);

	});

	it('renders passenger form without crashing', () => {
		localStorage.setItem(PROPERTY_USER, JSON.stringify({ user_id: '12345' }));
		wrapper = shallow(
			<ViewRideTakenTabTest rows={[{ rideId: 'f45', requestStatus: 'accepted', passengerId: '12345' }]} totalRequests={0} dispatch={jest.fn} rides={[]} />
		);
		expect(wrapper).toHaveLength(1);
		wrapper.setProps({});
		wrapper.instance().onSelectRide({ target: { value: '3e' } });
		wrapper.instance().handleChangePage({}, 4);
		wrapper.instance().handleChangeRowsPerPage({ target: { value: 3 } });
		wrapper.instance().onClickRequest(3, 3, 's34')({ preventDefault: jest.fn });
	});

	it('renders passenger form without crashing ViewRidesOfferedTabTest', () => {
		wrapper = shallow(
			<ViewRidesOfferedTabTest dispatch={jest.fn} rows={[]} />
		);
		expect(wrapper).toHaveLength(1);
		wrapper.setProps({});
		wrapper.instance().handleChangePage({}, 4);
		wrapper.instance().handleChangeRowsPerPage({ target: { value: 3 } });
	});

	it('should mount ViewRidesOfferedTab without crashing', () => {
		expect(mount(
			<Provider store={store}>
				<ViewRidesOfferedTab />
			</Provider>
		)).toHaveLength(1);
	});

	it('should test tabbed pages for passengers', () => {

		wrapper = shallow(<TabbedPagePassengerTest classes={{}} theme={{}} />);
		wrapper.instance().handleChange({}, 3);
		wrapper.instance().handleChangeIndex(3);
		wrapper = shallow(<TabbedPagePassengerTest classes={{}} theme={{ direction: 'rtl' }} />);

	});
});
