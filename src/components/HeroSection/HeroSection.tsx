import React from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@material-ui/core";

import { useStyles } from "./useStyles";
import { heroSection } from "../../portfolioContents/heroSection";
import classNames from "classnames";

const HeroSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          src="/linkedin-pic.jpg"
          width={433}
          height={577}
          alt="shadab-image"
        />
      </div>
      <div className={classes.content}>
        <Typography variant="h1">I’m Shadab.</Typography>
        <Typography variant="h1">A Full Stack Developer</Typography>
        <Typography variant="h1" className={classes.customFontColor}>
          based in India.
        </Typography>
        <Typography variant="body1" className={classes.about}>
          {heroSection.description}
        </Typography>
        <Box className={classes.ctaContainer}>
          <Button
            variant="contained"
            href={heroSection.email}
            className={classes.customContainedBtn}
          >
            Email Me
          </Button>
          <Button
            variant="outlined"
            href={heroSection.resume}
            className={classNames(classes.ctaBtn, classes.customOutlinedBtn)}
          >
            My Resume
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default HeroSection;
