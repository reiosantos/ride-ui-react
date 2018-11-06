import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import NetworkCheck from '@material-ui/icons/NetworkCheck';

const styles = theme => ({
	root: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		zIndex: 1000,
		backgroundColor: 'rgba(105, 105, 105, 0.2)'
	},
	wrapper: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		margin: 'auto',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0
	},
	buttonSuccess: {
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700]
		}
	},
	fabProgress: {
		color: '#FFF'
	},
	buttonProgress: {
		margin: 'auto',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		position: 'absolute'
	}
});

const CircularIntegration = ({ loading, success, classes }) => {
	const buttonClass = classNames({ [classes.buttonSuccess]: success }, classes.buttonProgress);

	return (
		!loading
			? null
			: (
				<div className={classes.root}>
					<div className={classes.wrapper}>
						<Button
							variant="fab"
							color="primary"
							className={buttonClass}
						>
							{success ? <CheckIcon /> : <NetworkCheck />}
						</Button>
						{
							loading && (
								<CircularProgress
									size={68}
									className={classNames(classes.fabProgress, classes.buttonProgress)}
								/>
							)
						}
					</div>
				</div>
			)
	);
};

CircularIntegration.propTypes = {
	classes: PropTypes.shape().isRequired,
	loading: PropTypes.bool,
	success: PropTypes.bool
};

CircularIntegration.defaultProps = {
	loading: false,
	success: false
};

export default withStyles(styles)(CircularIntegration);
