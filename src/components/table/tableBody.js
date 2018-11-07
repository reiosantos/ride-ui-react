import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import RideRowCategory from './rideCategory';
import RideRow from './rideRow';

const RideTableBody = ({
	rows, page, rowsPerPage, isViewRequest, onClickDelete, classes 
}) => (
	<TableBody>
		{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
			<Fragment key={row.category + row.id}>
				{
					row.category
						? <RideRowCategory group={row.category} classes={classes} />
						: (
							<RideRow
								isViewRequest={isViewRequest}
								onClickDelete={onClickDelete}
								row={row}
								classes={classes}
							/>
						)
				}
			</Fragment>
		))}
	</TableBody>
);

RideTableBody.propTypes = {
	classes: PropTypes.shape().isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	isViewRequest: PropTypes.bool.isRequired,
	rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	onClickDelete: PropTypes.func.isRequired
};

export default RideTableBody;
