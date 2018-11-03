import { mount, shallow } from 'enzyme';
import React from 'react';
import App from '../app/app';
import ButtonAppBar from '../app/appNavBar';
import '../index';

it('renders without crashing', () => {
	expect(shallow(<App />)).toHaveLength(1);
	expect(mount(<ButtonAppBar classes={{}} />)).toHaveLength(1);
});
