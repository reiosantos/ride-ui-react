import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import App from '../components/app/app';
import NavBar from '../components/navBar';
import '../index';

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
		const wrapper = shallow(<App />);
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

});
