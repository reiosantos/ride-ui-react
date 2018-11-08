import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/Grid';
import IconButton from '@material-ui/core/IconButton/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

const RideRow = (
	{
		row, classes, onClickDelete, isViewRequest
	}
) => (
	<TableRow key={row.id}>
		<TableCell>{row.tripFrom}</TableCell>
		<TableCell>{row.destination}</TableCell>
		<TableCell>{row.cost}</TableCell>
		<TableCell>{row.departureTime}</TableCell>
		<TableCell className={row.status === 'taken' ? classes.taken : ''}>{row.status}</TableCell>
		{
			isViewRequest
				? (
					<TableCell>
						<Grid container style={{ display: row.status === 'taken' ? 'none' : '' }}>
							<Grid item sm={6} lg={6} md={6}>
								<IconButton color="primary" onClick={onClickDelete(row.rideId, row.requestId, 'accepted')}><CheckIcon titleAccess="Accept Request" /></IconButton>
							</Grid>
							<Grid item sm={6} lg={6} md={6}>
								<IconButton onClick={onClickDelete(row.rideId, row.requestId, 'rejected')}><DeleteIcon titleAccess="Cancel Request" /></IconButton>
							</Grid>
						</Grid>
					</TableCell>
				)
				: (
					<TableCell>
						<IconButton onClick={onClickDelete(row.rideId)}><DeleteIcon titleAccess="delete ride" /></IconButton>
					</TableCell>
				)
		}
	</TableRow>
);

RideRow.propTypes = {
	row: PropTypes.shape().isRequired,
	classes: PropTypes.shape().isRequired,
	onClickDelete: PropTypes.func.isRequired,
	isViewRequest: PropTypes.bool.isRequired
};

export default RideRow;
