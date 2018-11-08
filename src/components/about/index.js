import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import NavBar from '../navBar';
import aboutStyles from '../../static/styles/aboutStyles';

const featuredPosts = [
	{
		title: 'Say it!',
		date: '',
		image: 'https://www.caranddriver.com/images/15q1/654923/2016-mclaren-p14-supercar-25-cars-worth-waiting-for-feature-car-and-driver-photo-657582-s-original.jpg',
		description:
			'I\'ve accepted that we\'ve all got crap to deal with and problems that we\'re fighting not to be defined by. At the end of the day, we all want the same stuff: fulfillment, love, support, comfort, and a hot-air balloon with laser guns attached to it. The most important thing is that we appreciate the crazy ride we\'re on.\n' +
			'Read more at: https://www.brainyquote.com/topics/ride'
	},
	{
		title: 'You feel like AIR~!',
		date: '',
		image: 'https://media.wired.com/photos/5aa18e3edc9df6500b90747b/master/pass/CarRoundup-Mclaren.jpg',
		description:
			'A lot of people are crazy, cruel and negative. They got a little too much time on their hands to discuss everybody else. I have a limited amount of energy to blow in a day. I\'d rather read something that I like or watch a program I enjoy or ride my damn motorcycle or throw back a couple of shots of tequila with my friends.\n' +
			'Read more at: https://www.brainyquote.com/topics/ride'
	}
];

function AboutUs(props) {
	const { classes } = props;

	return (
		<React.Fragment>
			<NavBar />
			<div className={classes.layout}>
				<Toolbar className={classes.toolbarMain}>
					<Typography component="h2" variant="h5" color="inherit" align="center" noWrap className={classes.toolbarTitle}>About Us</Typography>
				</Toolbar>
				<main>
					<Paper className={classes.mainFeaturedPost}>
						<Grid container>
							<Grid item md={12}>
								<div className={classes.mainFeaturedPostContent}>
									<Typography component="h1" variant="h3" color="inherit" gutterBottom>Let it ride.</Typography>
									<Typography variant="h5" color="inherit" paragraph>
										{'I truly believe in the transformative power of illustration and design and their ability to simplify communications,' +
										'elevate experiences, engage and inspire people everywhere. Good design and good relationships come from collaboration.'}
									</Typography>
								</div>
							</Grid>
						</Grid>
					</Paper>

					<Grid container spacing={40} className={classes.card}>
						{featuredPosts.map(post => (
							<Grid item key={post.title} xs={12} md={6}>
								<Card className={classes.card}>
									<div className={classes.cardDetails}>
										<CardContent>
											<Typography component="h2" variant="h5">
												{post.title}
											</Typography>
											<Typography variant="subtitle1" color="textSecondary">
												{post.date}
											</Typography>
											<Typography variant="subtitle1" paragraph>
												{post.description}
											</Typography>
										</CardContent>
									</div>
									<Hidden xsDown>
										<CardMedia
											className={classes.cardMedia}
											image={post.image}
											title="Image title"
										/>
									</Hidden>
								</Card>
							</Grid>
						))}
					</Grid>

				</main>
			</div>

			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>............</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary" component="p">Let us ride! Yhhmm.....</Typography>
			</footer>
		</React.Fragment>
	);
}

AboutUs.propTypes = {
	classes: PropTypes.shape().isRequired
};

export default withStyles(aboutStyles)(AboutUs);
