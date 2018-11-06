import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 0
	}
};

const NavBar = ({ classes, user }) => (
	<div className={classes.root}>
		<AppBar position="static">
			<Toolbar>
				<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
					<i className="fa fa-car fa-2x" />
				</IconButton>
				<Typography variant="h4" color="inherit" className={classes.grow}>
					<span>Ride my way</span>
				</Typography>
				<Button color="inherit" component={Link} to="/" replace>
					<i className="fa fa-home" />
					<span>Home</span>
				</Button>
				<Button color="inherit" component={Link} to="/about" replace>
					<i className="fa fa-info" />
					<span>About</span>
				</Button>
				<Button color="inherit" component={Link} to="/logout" replace>
					<i className="fa fa-sign-out-alt " />
					<span>{user.username}</span>
				</Button>
				<IconButton className={classes.menuButton} color="inherit" aria-label="Menu" />
			</Toolbar>
		</AppBar>
	</div>
);

NavBar.propTypes = {
	classes: PropTypes.shape().isRequired,
	user: PropTypes.shape().isRequired
};

const mapStateToProps = state => ({ ...state, user: state.authReducer.user });

export default connect(mapStateToProps)(withStyles(styles)(NavBar));
