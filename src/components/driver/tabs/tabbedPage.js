import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import FolderOpen from '@material-ui/icons/FolderOpen';
import List from '@material-ui/icons/List';
import ViewAllRidesTab from '../../../containers/driver/viewAllRidesTab';
import ViewRequestsTab from '../../../containers/driver/viewRequestsTab';
import TabContainer from './tabContainer';
import tabbedPageStyles from '../../../static/styles/tabbedPageStyles';

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

					<TabContainer dir={theme.direction}>
						<ViewRequestsTab />
					</TabContainer>
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

export default withStyles(tabbedPageStyles, { withTheme: true })(TabbedPage);
