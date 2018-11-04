import { mount } from 'enzyme';
import React from 'react';
import CircularIntegration from '../../components/progress';

describe('Circular Integration component', () => {

	it('renders circular integration without crashing', () => {
		let wrapper = mount(<CircularIntegration loading success classes={{}} />);
		expect(wrapper).toHaveLength(1);

		wrapper = mount(<CircularIntegration loading success={false} classes={{}} />);
		expect(wrapper).toHaveLength(1);

		wrapper = mount(<CircularIntegration loading={false} classes={{}} />);
		expect(wrapper).toHaveLength(1);
	});
});
