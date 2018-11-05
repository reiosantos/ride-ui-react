import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Driver, { DriverTest } from '../../../containers/driver';

let wrapper;
const mockStore = configureStore([thunk]);
let store;

describe('Driver Container', () => {

	beforeEach(() => {
		store = mockStore({
			ridesReducer: {
				newRide: {}
			}
		});
		wrapper = shallow(<DriverTest dispatch={jest.fn} />);
	});

	it('renders driver form without crashing', () => {
		expect(wrapper).toHaveLength(1);
		wrapper.setProps({ newRide: { error: '', success: 'yes' } });
		wrapper.setProps({ newRide: { error: 'no', success: '' } });
	});

	it('renders driver form without status messages', () => {
		wrapper.setProps({ newRide: { error: '', success: '' } });
	});

	it('should check other functions', () => {
		const func = wrapper.instance().onChange('tripDestination');
		expect(func).toBeInstanceOf(Function);
		func({ target: { value: 'val' } });

		wrapper.instance().handleSnackClose({}, 'reason');
		wrapper.instance().onSubmit({ preventDefault: jest.fn });

		const userData = {
			tripDestination: 'reio',
			tripDepartTime: '2019-12-12 22:23',
			tripCost: '2000',
			tripFrom: 'driver'
		};
		wrapper.setState(userData);
		wrapper.instance().onSubmit({ preventDefault: jest.fn });
	});

	it('should test onChange', () => {
		expect(
			mount(
				<MemoryRouter>
					<Provider store={store}>
						<Driver />
					</Provider>
				</MemoryRouter>
			)
		).toHaveLength(1);
	});
});
