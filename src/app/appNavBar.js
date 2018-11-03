import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
};

const ButtonAppBar = (props) => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
						<i className="fa fa-car fa-2x" />
					</IconButton>
					<Typography variant="h4" color="inherit" className={classes.grow}>
						<span>Ride my way</span>
					</Typography>
					<Button color="inherit">
						<i className="fa fa-home" />
						<span>Home</span>
					</Button>
					<Button color="inherit">
						<i className="fa fa-info" />
						<span>About</span>
					</Button>
					<Button color="inherit">
						<i className="fa fa-sign-out-alt " />
						<span>reiosantos</span>
					</Button>
					<IconButton className={classes.menuButton} color="inherit" aria-label="Menu" />
				</Toolbar>
			</AppBar>
		</div>
	);
};

ButtonAppBar.propTypes = {
	classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(ButtonAppBar);
