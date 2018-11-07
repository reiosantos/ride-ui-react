
const addRideFormStyles = theme => ({
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

export default addRideFormStyles;
