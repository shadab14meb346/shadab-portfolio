import {Typography} from "@material-ui/core";

import {useStyles} from "./useStyle";

interface ISectionHeaderProps {
	title: string;
	subtitle: string;
}

const SectionHeader = ({title, subtitle}: ISectionHeaderProps) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Typography variant="h5" color="textSecondary">
				{title}
			</Typography>
			<Typography variant="h2">{subtitle}</Typography>
		</div>
	);
};

export default SectionHeader;
