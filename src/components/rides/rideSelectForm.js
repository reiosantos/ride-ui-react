import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select/Select';
import withStyles from '@material-ui/core/styles/withStyles';
import rideSelectFormStyles from '../../static/styles/rideSelectFormStyles';

const RideSelectForm = ({
	classes, rows, onSelectRide, selectValue 
}) => (

	<FormControl className={classes.formControl} margin="normal" required>

		<InputLabel htmlFor="age-native-simple">Choose a ride</InputLabel>
		<Select native value={selectValue} onChange={onSelectRide}>
			<option value="" disabled />
			{
				rows.map(ride => <option key={ride.rideId + ride.requestId || ride.category} value={ride.rideId}>{`${ride.tripFrom} -- ${ride.destination}`}</option>)
			}
		</Select>
	</FormControl>
);

RideSelectForm.propTypes = {
	selectValue: PropTypes.string,
	classes: PropTypes.shape().isRequired,
	onSelectRide: PropTypes.func.isRequired,
	rows: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

RideSelectForm.defaultProps = {
	selectValue: ''
};

export default withStyles(rideSelectFormStyles)(RideSelectForm);
