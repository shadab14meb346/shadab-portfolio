import {useStyles} from "./useStyles";

interface ISectionContainerProps {
	children: any;
}

const SectionContainer = ({children}: ISectionContainerProps) => {
	const classes = useStyles();
	return <main className={classes.container}>{children}</main>;
};

export default SectionContainer;
