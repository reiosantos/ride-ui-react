import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import DriverPage from '../../../components/driver/driverPage';
import addRideForm from '../../../components/rides/addRideForm';

describe('DriverPage component', () => {

	it('renders driver page form without crashing', () => {
		const wrapper = mount(
			<MemoryRouter>
				<DriverPage
					handleClickShowPassword={jest.fn}
					showPassword
					onChange={jest.fn}
					formHasError={() => true}
					onSubmit={jest.fn}
				/>
			</MemoryRouter>
		);
		expect(wrapper).toHaveLength(1);
		expect(wrapper.find(addRideForm)).toHaveLength(1);

	});
});
