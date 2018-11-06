import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import FolderOpen from '@material-ui/icons/FolderOpen';
import List from '@material-ui/icons/List';
import ViewAllRidesTab from '../../containers/driver/viewAllRidesTab';

const TabContainer = ({ children, dir }) => (
	<Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
		{children}
	</Typography>
);

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired
};

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: '100%'
	}
});

class TabbedPage extends React.Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = (index) => {
		this.setState({ value: index });
	};

	render() {
		const { classes, theme } = this.props;
		const { value } = this.state;
		return (
			<div className={classes.root}>
				<AppBar position="static" color="default">
					<Tabs
						value={value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary"
						fullWidth
					>
						<Tab icon={<List />} label="Ride Offers" />
						<Tab icon={<FolderOpen />} label="Passenger Requests" />
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={value}
					onChangeIndex={this.handleChangeIndex}
				>
					<TabContainer dir={theme.direction}>
						<ViewAllRidesTab />
					</TabContainer>

					<TabContainer dir={theme.direction}>Passenger Requests</TabContainer>
				</SwipeableViews>
			</div>
		);
	}
}

TabbedPage.propTypes = {
	classes: PropTypes.shape().isRequired,
	theme: PropTypes.shape().isRequired
};

export { TabbedPage as TabbedPageTest };

export default withStyles(styles, { withTheme: true })(TabbedPage);
