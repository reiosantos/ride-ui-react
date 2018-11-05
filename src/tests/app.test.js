import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import App, { AppTest } from '../components/app/app';
import NavBar from '../components/navBar';
import '../index';
import { USER_TYPE_DRIVER } from '../constants';

const mockStore = configureStore([thunk]);
let store;

describe('App component', () => {
	beforeEach(() => {
		store = mockStore({
			authReducer: {
				user: {}
			}
		});
	});

	it('renders without crashing', () => {
		const wrapper = shallow(<AppTest auth={{ user: {} }} />);
		expect(wrapper).toHaveLength(1);
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
		store = mockStore({
			authReducer: {
				user: {
					userType: USER_TYPE_DRIVER
				}
			}
		});
		expect(mount(
			<MemoryRouter>
				<Provider store={store}>
					<App classes={{}} />
				</Provider>
			</MemoryRouter>
		)).toHaveLength(1);
	});

});
