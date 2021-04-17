import {Typography} from "@material-ui/core";

import {useStyles} from "./useStyle";

interface ISectionHeaderProps {
	title: string;
	subtitle: string;
	description?: string;
}

const SectionHeader = ({title, subtitle, description}: ISectionHeaderProps) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Typography variant="h5" color="textSecondary">
				{title}
			</Typography>
			<Typography variant="h2">{subtitle}</Typography>
			<Typography
				variant="h4"
				color="textSecondary"
				className={classes.description}>
				{description}
			</Typography>
		</div>
	);
};

export default SectionHeader;
