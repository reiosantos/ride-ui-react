import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SignUpForm from '../../../components/auth/signupForm';

describe('SignupForm component', () => {

	it('renders SignUp form without crashing', () => {
		let wrapper = mount(
			<MemoryRouter>
				<SignUpForm
					handleClickShowPassword={jest.fn}
					handleSelectChange={jest.fn}
					showPassword
					onChange={jest.fn}
					formHasError={() => true}
				/>
			</MemoryRouter>
		);
		expect(wrapper).toHaveLength(1);

		wrapper = mount(
			<MemoryRouter>
				<SignUpForm
					handleClickShowPassword={jest.fn}
					handleSelectChange={jest.fn}
					onChange={jest.fn}
					formHasError={() => true}
				/>
			</MemoryRouter>
		);
		expect(wrapper).toHaveLength(1);

	});
});
