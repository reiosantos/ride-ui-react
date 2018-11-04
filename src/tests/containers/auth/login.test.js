import { shallow } from 'enzyme';
import React from 'react';
import { LoginTest } from '../../../containers/auth/login';
import { LogoutTest } from '../../../containers/auth/logout';

let wrapper;
describe('Login Container', () => {

	beforeEach(() => {
		wrapper = shallow(<LoginTest dispatch={jest.fn} />);
	});

	it('renders Login form without crashing', () => {
		expect(wrapper).toHaveLength(1);
		wrapper.setProps({ auth: { error: '', success: 'yes' }, history: { push: jest.fn } });
		wrapper.setProps({ auth: { error: 'no', success: '' }, history: { push: jest.fn } });
	});

	it('renders Login form without login status messages', () => {
		wrapper.setProps({ auth: { error: '', success: '' }, history: { push: jest.fn } });
	});

	it('should check other functions', () => {
		wrapper.instance().handleClickShowPassword();
		expect(wrapper.state().showPassword).toBeTruthy();
		let func = wrapper.instance().onChange('name');
		expect(func).toBeInstanceOf(Function);
		func({ target: { value: 'val' } });

		func = wrapper.instance().onChange('username');
		expect(func).toBeInstanceOf(Function);
		func({ target: { value: 'val' } });

		wrapper.instance().handleSnackClose({}, 'reason');
		wrapper.instance().onSubmit({ preventDefault: jest.fn });

		const userData = {
			username: 'r'
		};
		wrapper.setState(userData);
		wrapper.instance().onSubmit({ preventDefault: jest.fn });
	});

	it('should render Logout without crashing ', () => {
		expect(shallow(<LogoutTest dispatch={jest.fn} />)).toHaveLength(1);
	});
});
