import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import LogInForm from '../../../components/auth/loginForm';

describe('LoginForm component', () => {

	it('renders Login form without crashing', () => {
		let wrapper = mount(
			<MemoryRouter>
				<LogInForm
					handleClickShowPassword={jest.fn}
					showPassword
					onChange={jest.fn}
					formHasError={() => true}
					onSubmit={jest.fn}
				/>
			</MemoryRouter>
		);
		expect(wrapper).toHaveLength(1);

		wrapper = mount(
			<MemoryRouter>
				<LogInForm
					onSubmit={jest.fn}
					handleClickShowPassword={jest.fn}
					onChange={jest.fn}
					formHasError={() => true}
				/>
			</MemoryRouter>
		);
		expect(wrapper).toHaveLength(1);

	});
});
