import { useState, Children } from "react";
import { IconButton } from "@material-ui/core";

import Arrow from "../Icons/Arrow";
import { useStyles } from "./useStyles";

interface ISliderProps {
  children: any;
}

const Slider = ({ children }: ISliderProps) => {
  const [visibleItemIndex, setVisibleItemIndex] = useState<number>(0);

  const totalItemsCount = Children.count(children);
  const classes = useStyles();

  const handleRightClick = () => {
    setVisibleItemIndex((prevIndex) =>
      prevIndex < totalItemsCount - 1 ? prevIndex + 1 : 0,
    );
  };

  const handleLeftClick = () => {
    setVisibleItemIndex((prevIndex) =>
      prevIndex < totalItemsCount - 1 ? prevIndex + 1 : 0,
    );
  };

  return (
    <div className={classes.container}>
      <IconButton
        color="inherit"
        aria-label="upload picture"
        onClick={handleLeftClick}
      >
        <Arrow direction="left" />
      </IconButton>

      <div className={classes.content}>
        {Children.toArray(children)[visibleItemIndex]}
      </div>

      <IconButton color="inherit" onClick={handleRightClick}>
        <Arrow direction="right" />
      </IconButton>
    </div>
  );
};

export default Slider;
