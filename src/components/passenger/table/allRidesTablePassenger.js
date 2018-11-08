import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { functionPlaceholder } from '../../../utils';
import TablePaginationViewActions from '../../pagination/tablePaginationViewActions';
import RideTableBodyPassenger from './tableBodyPassenger';
import TableHeaderPassenger from './tableHeaderPassenger';
import allRidesTableStyles from '../../../static/styles/allRidesTableStyles';

const AllRidesTablePassenger = (
	{
		classes, page, rowsPerPage, rows, handleChangePage,
		handleChangeRowsPerPage, ridesOffered, onClickSend
	}
) => (
	<div className={classes.tableWrapper}>
		<Table className={classes.table}>
			<TableHeaderPassenger isViewRequest={ridesOffered} />

			<RideTableBodyPassenger
				classes={classes}
				ridesOffered={ridesOffered}
				rows={rows}
				onClickSend={onClickSend}
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

AllRidesTablePassenger.propTypes = {
	classes: PropTypes.shape().isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	handleChangePage: PropTypes.func.isRequired,
	handleChangeRowsPerPage: PropTypes.func.isRequired,
	onClickSend: PropTypes.func,
	ridesOffered: PropTypes.bool
};

AllRidesTablePassenger.defaultProps = {
	ridesOffered: false,
	onClickSend: functionPlaceholder
};

export default withStyles(allRidesTableStyles)(AllRidesTablePassenger);
