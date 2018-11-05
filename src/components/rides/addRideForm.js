import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
	},
	avatar: {
		margin: theme.spacing.unit
	},
	submit: {
		marginTop: theme.spacing.unit * 3
	},
	form: {
		width: '100%'
	}
});

const AddRideForm = (
	{
		classes, onChange, onSubmit, errors, formHasError,
		tripDestination, tripFrom, tripCost, tripDepartTime
	}
) => (
	<React.Fragment>
		<main className={classes.layout}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}><Edit /></Avatar>
				<Typography component="h1" variant="h5">Ride Offer</Typography>

				<form className={classes.form} onSubmit={onSubmit}>
					<FormControl margin="normal" required fullWidth error={!!errors.tripDestination}>
						<InputLabel htmlFor="username">Destination</InputLabel>
						<Input value={tripDestination} onChange={onChange('tripDestination')} id="tripDestination" name="tripDestination" autoComplete="tripDestination" autoFocus />
						<FormHelperText error={!!errors.tripDestination}>
							{errors.tripDestination}
						</FormHelperText>
					</FormControl>

					<FormControl margin="normal" required fullWidth error={!!errors.tripFrom}>
						<InputLabel htmlFor="tripFrom">Pick Up</InputLabel>
						<Input value={tripFrom} onChange={onChange('tripFrom')} id="tripFrom" name="tripFrom" autoComplete="tripFrom" autoFocus />
						<FormHelperText error={!!errors.tripFrom}>{errors.tripFrom}</FormHelperText>
					</FormControl>

					<FormControl margin="normal" required fullWidth error={!!errors.tripCost}>
						<InputLabel htmlFor="tripCost">Amount (Ugx)</InputLabel>
						<Input
							value={tripCost}
							onChange={onChange('tripCost')}
							id="tripCost"
							name="tripCost"
							autoComplete="tripCost"
							autoFocus
							startAdornment={(<InputAdornment position="start">Ugx: </InputAdornment>)}
						/>
						<FormHelperText error={!!errors.tripCost}>{errors.tripCost}</FormHelperText>
					</FormControl>

					<FormControl margin="normal" required fullWidth error={!!errors.tripDepartTime}>
						<InputLabel htmlFor="tripDepartTime">Departure Date</InputLabel>
						<Input
							type="datetime-local"
							value={tripDepartTime}
							onChange={onChange('tripDepartTime')}
							id="tripDepartTime"
							name="tripDepartTime"
							autoComplete="tripDepartTime"
							autoFocus
							startAdornment={(
								<InputAdornment position="start"><i className="fa fa-calendar" /></InputAdornment>
							)}
						/>
						<FormHelperText error={!!errors.tripDepartTime}>{errors.tripDepartTime}</FormHelperText>
					</FormControl>

					<Button disabled={formHasError()} type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
						<span>
							<i className="fa fa-plus-circle" />
							{'create'}
						</span>
					</Button>
				</form>
			</Paper>
		</main>
	</React.Fragment>
);

AddRideForm.propTypes = {
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

AddRideForm.defaultProps = {
	tripDestination: '',
	tripFrom: '',
	tripCost: '',
	tripDepartTime: '',
	errors: {}
};

export default withStyles(styles)(AddRideForm);
