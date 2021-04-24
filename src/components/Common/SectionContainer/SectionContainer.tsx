import {useStyles} from "./useStyles";

interface ISectionContainerProps {
	children: any;
}

const SectionContainer = ({children}: ISectionContainerProps) => {
	const classes = useStyles();
	return <section className={classes.container}>{children}</section>;
};

export default SectionContainer;
