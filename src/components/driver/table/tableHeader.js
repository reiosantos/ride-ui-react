import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CustomTableCell from './customTableCell';

const TableHeader = ({ isViewRequest }) => (
	<TableHead>
		{
			!isViewRequest
				? (
					<TableRow>
						<CustomTableCell>Pick Up</CustomTableCell>
						<CustomTableCell>Destination</CustomTableCell>
						<CustomTableCell>Amount(Ugx)</CustomTableCell>
						<CustomTableCell>Departure</CustomTableCell>
						<CustomTableCell>Status</CustomTableCell>
						<CustomTableCell />
					</TableRow>
				) : (
					<TableRow>
						<CustomTableCell>Name</CustomTableCell>
						<CustomTableCell>Contact</CustomTableCell>
						<CustomTableCell>Cost</CustomTableCell>
						<CustomTableCell>Request Date</CustomTableCell>
						<CustomTableCell>Trip (From - To)</CustomTableCell>
						<CustomTableCell />
					</TableRow>
				)

		}

	</TableHead>
);

TableHeader.propTypes = {
	isViewRequest: PropTypes.bool.isRequired
};

export default TableHeader;
