import IconButton from '@material-ui/core/IconButton/IconButton';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/Grid';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import TablePaginationViewActions from './pagination/tablePaginationViewActions';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3
	},
	table: {
		minWidth: 500
	},
	tableWrapper: {
		overflowX: 'auto'
	},
	category: {
		backgroundColor: theme.palette.grey[100]
	},
	taken: {
		color: theme.palette.error.main,
		backgroundColor: theme.palette.grey[200],
		fontWeight: 'bolder'
	},
	grid: {
		marginBottom: theme.spacing.unit
	}
});

const CustomTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.grey[50],
		color: theme.palette.common.black
	},
	body: {
		fontSize: 14
	}
}))(TableCell);

const RideRowCategory = ({ group, classes }) => (
	<TableRow key={group} className={classes.category}>
		<TableCell colSpan={6}>{`Offered On: ${group}`}</TableCell>
	</TableRow>
);

RideRowCategory.propTypes = {
	group: PropTypes.string.isRequired,
	classes: PropTypes.shape().isRequired
};

const RideRow = ({ row, classes, onClickDelete }) => (
	<TableRow key={row.id}>
		<TableCell>{row.tripFrom}</TableCell>
		<TableCell>{row.destination}</TableCell>
		<TableCell>{row.cost}</TableCell>
		<TableCell>{row.departureTime}</TableCell>
		<TableCell className={row.status === 'taken' ? classes.taken : ''}>{row.status}</TableCell>
		<TableCell><IconButton onClick={onClickDelete(row.rideId)}><DeleteIcon titleAccess="delete ride" /></IconButton></TableCell>
	</TableRow>
);

RideRow.propTypes = {
	row: PropTypes.shape().isRequired,
	classes: PropTypes.shape().isRequired,
	onClickDelete: PropTypes.func.isRequired
};

const AllRidesTable = (
	{
		classes, page, rowsPerPage, rows, handleChangePage, onClickDelete,
		handleChangeRowsPerPage, ridesGiven, ridesTaken
	}
) => (
	<div className={classes.tableWrapper}>
		<Grid container spacing={24} className={classes.grid}>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<Typography variant="h6" component="h6" align="center">{`Total Offers given: ${ridesGiven || 0}`}</Typography>
			</Grid>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<Typography variant="h6" component="h6" align="center">{`Rides Taken: ${ridesTaken || 0}`}</Typography>
			</Grid>
		</Grid>
		<Table className={classes.table}>
			<TableHead>
				<TableRow>
					<CustomTableCell>Pick Up</CustomTableCell>
					<CustomTableCell>Destination</CustomTableCell>
					<CustomTableCell>
						<span>Amount</span>
						<sup>(Ugx)</sup>
					</CustomTableCell>
					<CustomTableCell>Departure</CustomTableCell>
					<CustomTableCell>Status</CustomTableCell>
					<CustomTableCell />
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
					<Fragment key={row.category + row.id}>
						{
							row.category
								? <RideRowCategory group={row.category} classes={classes} />
								: <RideRow onClickDelete={onClickDelete} row={row} classes={classes} />
						}
					</Fragment>
				))}
			</TableBody>
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
	rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	handleChangePage: PropTypes.func.isRequired,
	handleChangeRowsPerPage: PropTypes.func.isRequired,
	onClickDelete: PropTypes.func.isRequired

};

export { AllRidesTable as AllRidesTableTest };

export default withStyles(styles)(AllRidesTable);
