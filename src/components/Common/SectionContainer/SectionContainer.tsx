import {MutableRefObject} from "react";

import {useStyles} from "./useStyles";

interface ISectionContainerProps {
	children: any;
	sectionRef?: MutableRefObject<any>;
}

const SectionContainer = ({children, sectionRef}: ISectionContainerProps) => {
	const classes = useStyles();
	return (
		<section className={classes.container} ref={sectionRef}>
			{children}
		</section>
	);
};

export default SectionContainer;
