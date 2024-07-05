import React from "react";
import classNames from "classnames";

import { useStyles } from "./useStyles";

type ArrowDirectionTypes = "right" | "left";
interface IArrowProps extends React.HTMLAttributes<{ accessKey?: string }> {
  className?: string;
  direction: ArrowDirectionTypes;
}

const Arrow = ({ className, direction, ...props }: IArrowProps) => {
  const classes = useStyles();
  const getArrow = (direction) => {
    switch (direction) {
      case "left":
        return "<";
      case "right":
        return ">";
    }
  };
  return (
    <span className={classNames(classes.defaultArrow, className)} {...props}>
      {getArrow(direction)}
    </span>
  );
};

export default Arrow;
