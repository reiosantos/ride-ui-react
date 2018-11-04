import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';
import IconButton from '@material-ui/core/IconButton/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
	layout: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: theme.spacing.unit * 4,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit
	},
	submit: {
		marginTop: theme.spacing.unit * 3
	},
	typography: {
		marginTop: theme.spacing.unit
	},
	textField: {
		flexBasis: 200
	}
});

const LogInForm = ({
	classes, onChange, onSubmit, showPassword, password, handleClickShowPassword,
	errors, username, formHasError
}) => (
	<React.Fragment>
		<CssBaseline />
		<main className={classes.layout}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}><LockIcon /></Avatar>
				<Typography component="h1" variant="h5">Log-in</Typography>

				<form className={classes.form} onSubmit={onSubmit}>
					<FormControl margin="normal" required fullWidth error={!!errors.username}>
						<InputLabel htmlFor="username">Username or Phone Number</InputLabel>
						<Input value={username} onChange={onChange('username')} id="username" name="username" autoComplete="username" autoFocus />
						<FormHelperText error={!!errors.username}>{errors.username}</FormHelperText>
					</FormControl>

					<FormControl className={classes.textField} margin="normal" fullWidth>
						<InputLabel htmlFor="adornment-password">Password</InputLabel>
						<Input
							id="adornment-password"
							type={showPassword ? 'text' : 'password'}
							value={password}
							onChange={onChange('password')}
							endAdornment={(
								<InputAdornment position="end">
									<IconButton
										color="primary"
										aria-label="Toggle password visibility"
										onClick={handleClickShowPassword}
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							)}
						/>
					</FormControl>

					<Button disabled={formHasError()} type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
						<span>
							<i className="fa fa-sign-in-alt" />
							{' Login in'}
						</span>
					</Button>
				</form>

				<Button className={classes.typography} component={Link} to="/signup" replace>
					<Typography>Do not have an account? Sign-up.</Typography>
				</Button>
			</Paper>
		</main>
	</React.Fragment>
);

LogInForm.propTypes = {
	classes: PropTypes.shape().isRequired,
	onChange: PropTypes.func.isRequired,
	formHasError: PropTypes.func.isRequired,
	handleClickShowPassword: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	showPassword: PropTypes.bool,
	password: PropTypes.string,
	username: PropTypes.string,
	errors: PropTypes.shape()
};

LogInForm.defaultProps = {
	showPassword: false,
	password: '',
	username: '',
	errors: {}
};

export default withStyles(styles)(LogInForm);
