import { Typography } from "@material-ui/core";
import Image from "next/image";

import { useStyles } from "./useStyles";

interface ISkillItemProps {
  name: string;
  image: string;
}
const SkillItem = ({ name, image }: ISkillItemProps) => {
  const classes = useStyles();
  return (
    <div className={classes.skillItemContainer}>
      <Image width={96} height={96} src={`/${image}`} alt="image" />
      <Typography variant="h3">{name}</Typography>
    </div>
  );
};

export default SkillItem;
