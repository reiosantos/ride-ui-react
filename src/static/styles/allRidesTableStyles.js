
const allRidesTableStyles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3
	},
	table: {
		minWidth: 500
	},
	tableWrapper: {
		overflowX: 'auto'
	},
	category: {
		backgroundColor: theme.palette.grey[100]
	},
	taken: {
		color: theme.palette.error.main,
		backgroundColor: theme.palette.grey[200],
		fontWeight: 'bolder'
	},
	grid: {
		marginBottom: theme.spacing.unit
	}
});

export default allRidesTableStyles;
