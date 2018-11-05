import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SignUp, { SignUpTest } from '../../../containers/auth/signup';

let wrapper;
const mockStore = configureStore([thunk]);
let store;

describe('Signup Container', () => {

	beforeEach(() => {
		store = mockStore({
			authReducer: {
				user: {}
			}
		});
		wrapper = shallow(<SignUpTest dispatch={jest.fn} history={{ push: jest.fn }} />);
	});

	it('renders Signup form without crashing', () => {
		expect(wrapper).toHaveLength(1);
		wrapper.setProps({ auth: { error: '', success: 'yes' }, history: { push: jest.fn } });
		wrapper.setProps({ auth: { error: 'no', success: '' }, history: { push: jest.fn } });
	});

	it('renders Signup form without login status messages', () => {
		wrapper.setProps({ auth: { error: '', success: '' }, history: { push: jest.fn } });
	});

	it('should check other functions', () => {
		wrapper.instance().handleClickShowPassword();
		expect(wrapper.state().showPassword).toBeTruthy();

		const func = wrapper.instance().onChange('username');
		expect(func).toBeInstanceOf(Function);
		func({ target: { value: 'val' } });

		wrapper.instance().handleSnackClose({}, 'reason');
		wrapper.instance().onSubmit({ preventDefault: jest.fn });

		const userData = {
			username: 'reio',
			phoneNumber: '02345678998',
			fullNames: 'defgrtgr',
			userType: 'driver',
			password: 'wer5t43rt'
		};
		wrapper.setState(userData);
		wrapper.instance().onSubmit({ preventDefault: jest.fn });

		wrapper.instance().redirect();
	});

	it('should test onChange', () => {
		const func = wrapper.instance().handleSelectChange('name');
		expect(func).toBeInstanceOf(Function);
		func({ target: { value: 'val' } });

		expect(
			mount(
				<MemoryRouter>
					<Provider store={store}>
						<SignUp />
					</Provider>
				</MemoryRouter>
			)
		).toHaveLength(1);
	});
});
