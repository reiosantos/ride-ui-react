import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const RideRowCategory = ({ group, classes }) => (
	<TableRow key={group} className={classes.category}>
		<TableCell colSpan={6}>{`Offered On: ${group}`}</TableCell>
	</TableRow>
);

RideRowCategory.propTypes = {
	group: PropTypes.string.isRequired,
	classes: PropTypes.shape().isRequired
};

export default RideRowCategory;
