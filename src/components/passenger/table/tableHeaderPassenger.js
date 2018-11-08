import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CustomTableCell from './customTableCell';

const TableHeaderPassenger = ({ isViewRequest }) => (
	<TableHead>
		{
			isViewRequest
				? (
					<TableRow>
						<CustomTableCell>Pick Up</CustomTableCell>
						<CustomTableCell>Destination</CustomTableCell>
						<CustomTableCell>Amount(Ugx)</CustomTableCell>
						<CustomTableCell>Departure</CustomTableCell>
						<CustomTableCell />
					</TableRow>
				) : (
					<TableRow>
						<CustomTableCell>Pick Up</CustomTableCell>
						<CustomTableCell>Destination</CustomTableCell>
						<CustomTableCell>Cost</CustomTableCell>
						<CustomTableCell>Departure</CustomTableCell>
						<CustomTableCell />
					</TableRow>
				)

		}

	</TableHead>
);

TableHeaderPassenger.propTypes = {
	isViewRequest: PropTypes.bool.isRequired
};

export default TableHeaderPassenger;
