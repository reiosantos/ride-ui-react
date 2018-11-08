import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import AddRideForm from '../rides/addRideForm';
import TabbedPage from './tabs/tabbedPage';
import driverPageStyles from '../../static/styles/driverPageStyles';

const DriverPage = (
	{
		classes, onChange, onSubmit, formHasError, errors, ...other
	}
) => (
	<Fragment>
		<div className={classes.root}>
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<Typography variant="h5" component="h5" align="center">You got it. Create new rides.</Typography>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<AddRideForm
						onSubmit={onSubmit}
						onChange={onChange}
						formHasError={formHasError}
						errors={errors}
						{...other}
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={8} lg={8}>
					<Paper className={classes.paper}>
						<TabbedPage />
					</Paper>
				</Grid>
			</Grid>
		</div>
	</Fragment>
);

DriverPage.propTypes = {
	classes: PropTypes.shape().isRequired,
	onChange: PropTypes.func.isRequired,
	formHasError: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	errors: PropTypes.shape(),
	tripDestination: PropTypes.string,
	tripFrom: PropTypes.string,
	tripCost: PropTypes.string,
	tripDepartTime: PropTypes.string
};

DriverPage.defaultProps = {
	errors: {},
	tripDestination: '',
	tripFrom: '',
	tripCost: '',
	tripDepartTime: ''
};

export default withStyles(driverPageStyles)(DriverPage);
