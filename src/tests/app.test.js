import { mount, shallow } from 'enzyme';
import React from 'react';
import App from '../components/app/app';
import NavBar from '../components/navBar';
import '../index';

it('renders without crashing', () => {
	expect(shallow(<App />)).toHaveLength(1);
	expect(mount(<NavBar classes={{}} />)).toHaveLength(1);
});
