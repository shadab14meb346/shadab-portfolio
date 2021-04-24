import {Link} from "@material-ui/core";
import Image from "next/image";

import {useStyles} from "./useStyles";

const SocialMediaProfileItem = ({icon, link}) => {
	const classes = useStyles();
	return (
		<Link href={link} target="_blank" className={classes.socialMediaItemMain}>
			<Image height={24} width={24} src={`/${icon}`} />
		</Link>
	);
};

export default SocialMediaProfileItem;
