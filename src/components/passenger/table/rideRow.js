import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { PROPERTY_USER } from '../../../constants';

const RideRow = ({ row, ridesOffered, onClickSend }) => {
	if (ridesOffered) {
		return row.status === 'taken' ? null : (
			<TableRow key={row.id}>
				<TableCell>{row.tripFrom}</TableCell>
				<TableCell>{row.destination}</TableCell>
				<TableCell>{row.cost}</TableCell>
				<TableCell>{row.departureTime}</TableCell>
				<TableCell>
					<IconButton onClick={onClickSend(row.rideId)}>
						<SendIcon titleAccess="request for this ride" />
					</IconButton>
				</TableCell>
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
		</TableRow>
	));
	
};

RideRow.propTypes = {
	row: PropTypes.shape().isRequired,
	ridesOffered: PropTypes.bool.isRequired,
	onClickSend: PropTypes.func.isRequired
};

export default RideRow;
