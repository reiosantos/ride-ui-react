import Typography from '@material-ui/core/Typography/Typography';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddRideForm from '../rides/addRideForm';

const styles = theme => ({
	root: {
		flexGrow: 1,
		margin: theme.spacing.unit * 2,
		marginTop: theme.spacing.unit * 4
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
});

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
				<Grid item xs={12} sm={12} md={8} lg={8} />
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

export default withStyles(styles)(DriverPage);
