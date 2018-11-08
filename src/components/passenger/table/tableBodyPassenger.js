import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import RideRowCategory from './rideCategory';
import RideRow from './rideRow';

const RideTableBodyPassenger = ({
	rows, page, rowsPerPage, ridesOffered, classes, onClickSend
}) => (
	<TableBody>
		{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
			<Fragment key={row.category + row.id}>
				{
					row.category
						? <RideRowCategory group={row.category} classes={classes} />
						: (
							<RideRow
								ridesOffered={ridesOffered}
								row={row}
								classes={classes}
								onClickSend={onClickSend}
							/>
						)
				}
			</Fragment>
		))}
	</TableBody>
);

RideTableBodyPassenger.propTypes = {
	classes: PropTypes.shape().isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	ridesOffered: PropTypes.bool.isRequired,
	onClickSend: PropTypes.func.isRequired,
	rows: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default RideTableBodyPassenger;
