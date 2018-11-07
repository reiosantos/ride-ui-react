import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import AboutUs from '../../../components/about';

it('should render about page', () => {

	const store = configureStore([])({
		authReducer: {
			user: {}
		}
	});
	expect(mount(
		<MemoryRouter>
			<Provider store={store}>
				<AboutUs />
			</Provider>
		</MemoryRouter>
	)).toHaveLength(1);
});
