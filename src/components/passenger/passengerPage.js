import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
import TabbedPagePassenger from './tabs/tabbedPagePassenger';
import driverPageStyles from '../../static/styles/driverPageStyles';

const PassengerPage = (
	{
		classes
	}
) => (
	<Fragment>
		<div className={classes.root}>
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<Typography variant="h5" component="h5" align="center">Feel like riding? request for It.</Typography>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Paper className={classes.paper}>
						<TabbedPagePassenger />
					</Paper>

				</Grid>
			</Grid>
		</div>
	</Fragment>
);

PassengerPage.propTypes = {
	classes: PropTypes.shape().isRequired
};

export default withStyles(driverPageStyles)(PassengerPage);
