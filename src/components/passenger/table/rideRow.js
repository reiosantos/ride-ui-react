import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { PROPERTY_USER } from '../../../constants';

const RideRow = ({ row, ridesOffered }) => {
	if (ridesOffered) {
		return row.status === 'taken' ? null : (
			<TableRow key={row.id}>
				<TableCell>{row.tripFrom}</TableCell>
				<TableCell>{row.destination}</TableCell>
				<TableCell>{row.cost}</TableCell>
				<TableCell>{row.departureTime}</TableCell>
				<TableCell />
			</TableRow>
		);
	}
	const user = JSON.parse(localStorage.getItem(PROPERTY_USER));

	return (!(row.requestStatus === 'accepted' && row.passengerId === user.user_id) ? null : (
		<TableRow key={row.id}>
			<TableCell>{row.tripFrom}</TableCell>
			<TableCell>{row.destination}</TableCell>
			<TableCell>{row.cost}</TableCell>
			<TableCell>{row.departureTime}</TableCell>
			<TableCell />
		</TableRow>
	));
	
};

RideRow.propTypes = {
	row: PropTypes.shape().isRequired,
	ridesOffered: PropTypes.bool.isRequired
};

export default RideRow;
