import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import FolderOpen from '@material-ui/icons/FolderOpen';
import List from '@material-ui/icons/List';
import ViewRideTakenTab from '../../../containers/passenger/viewRideTakenTab';
import ViewRidesOfferedTab from '../../../containers/passenger/viewRidesOfferedTab';
import TabContainerPassenger from './tabContainerPassenger';
import tabbedPageStyles from '../../../static/styles/tabbedPageStyles';

class TabbedPagePassenger extends React.Component {
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
						<Tab icon={<List />} label="Rides Taken" />
						<Tab icon={<FolderOpen />} label="Available offers" />
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={value}
					onChangeIndex={this.handleChangeIndex}
				>
					<TabContainerPassenger dir={theme.direction}>
						<ViewRideTakenTab />
					</TabContainerPassenger>

					<TabContainerPassenger dir={theme.direction}>
						<ViewRidesOfferedTab />
					</TabContainerPassenger>
				</SwipeableViews>
			</div>
		);
	}
}

TabbedPagePassenger.propTypes = {
	classes: PropTypes.shape().isRequired,
	theme: PropTypes.shape().isRequired
};

export { TabbedPagePassenger as TabbedPagePassengerTest };

export default withStyles(tabbedPageStyles, { withTheme: true })(TabbedPagePassenger);
