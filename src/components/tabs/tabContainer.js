import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const TabContainer = ({ children, dir }) => (
	<Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
		{children}
	</Typography>
);

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired
};

export default TabContainer;
