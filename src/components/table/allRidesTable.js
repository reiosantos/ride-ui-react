import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import allRidesTableStyles from '../../static/styles/allRidesTableStyles';
import TablePaginationViewActions from './pagination/tablePaginationViewActions';
import RideTableBody from './tableBody';
import TableHeader from './tableHeader';
import TableHeaderText from './tableHeaderText';

const AllRidesTable = (
	{
		classes, page, rowsPerPage, rows, handleChangePage, onClickDelete,
		handleChangeRowsPerPage, ridesGiven, ridesTaken, totalRequests, isViewRequest
	}
) => (
	<div className={classes.tableWrapper}>
		<TableHeaderText
			ridesGiven={ridesGiven}
			ridesTaken={ridesTaken}
			totalRequests={totalRequests}
			classes={classes}
		/>
		<Table className={classes.table}>
			<TableHeader isViewRequest={isViewRequest} />
			<RideTableBody
				classes={classes}
				isViewRequest={isViewRequest}
				rows={rows}
				onClickDelete={onClickDelete}
				rowsPerPage={rowsPerPage}
				page={page}
			/>
			<TableFooter>
				<TableRow>
					<TablePagination
						colSpan={6}
						count={rows.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onChangePage={handleChangePage}
						onChangeRowsPerPage={handleChangeRowsPerPage}
						ActionsComponent={TablePaginationViewActions}
					/>
				</TableRow>
			</TableFooter>
		</Table>
	</div>
);

AllRidesTable.propTypes = {
	classes: PropTypes.shape().isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	ridesGiven: PropTypes.number.isRequired,
	ridesTaken: PropTypes.number.isRequired,
	totalRequests: PropTypes.number,
	isViewRequest: PropTypes.bool,
	rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	handleChangePage: PropTypes.func.isRequired,
	handleChangeRowsPerPage: PropTypes.func.isRequired,
	onClickDelete: PropTypes.func.isRequired

};

AllRidesTable.defaultProps = {
	totalRequests: null,
	isViewRequest: false
};

export { AllRidesTable as AllRidesTableTest };

export default withStyles(allRidesTableStyles)(AllRidesTable);
