import {BoxProps, Box, Typography} from "@material-ui/core";
import classNames from "classnames";

import {useStyles} from "./useStyle";

interface ISectionHeaderProps extends BoxProps {
	title?: string;
	subtitle: string;
	description?: string;
	className?: string;
}

const SectionHeader = ({
	title = "",
	subtitle,
	description,
	className,
	...rest
}: ISectionHeaderProps) => {
	const classes = useStyles();
	return (
		<Box
			component="header"
			{...rest}
			className={classNames(classes.container, className)}>
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
		</Box>
	);
};

export default SectionHeader;
