import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import { EnhancerOptions as undefined } from 'redux-devtools-extension';

const TableHeaderText = ({
	totalRequests, ridesGiven, ridesTaken, classes
}) => (
	<Grid container spacing={24} className={classes.grid}>
		{
			totalRequests !== null && totalRequests !== undefined
				? (
					<Fragment>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<Typography variant="h6" component="h6" align="center">{`Total requests: ${totalRequests || 0}`}</Typography>
						</Grid>
					</Fragment>
				)
				: (
					<Fragment>
						<Grid item xs={12} sm={12} md={6} lg={6}>
							<Typography variant="h6" component="h6" align="center">{`Total Offers given: ${ridesGiven || 0}`}</Typography>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={6}>
							<Typography variant="h6" component="h6" align="center">{`Rides Taken: ${ridesTaken || 0}`}</Typography>
						</Grid>
					</Fragment>
				)
		}
	</Grid>
);

TableHeaderText.propTypes = {
	classes: PropTypes.shape().isRequired,
	totalRequests: PropTypes.number,
	ridesGiven: PropTypes.number.isRequired,
	ridesTaken: PropTypes.number.isRequired
};

TableHeaderText.defaultProps = {
	totalRequests: null
};

export default TableHeaderText;
