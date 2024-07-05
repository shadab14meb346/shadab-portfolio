import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(5),
    background: theme.palette.primary.light,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      background: theme.palette.primary.dark,
    },
  },
  content: {
    maxWidth: "1024px",
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  customFontColor: {
    color: "rgb(117,117,121)",
  },
  about: {
    maxWidth: "80%",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1.5),
      maxWidth: "100%",
    },
  },
  imageContainer: {
    paddingLeft: theme.spacing(9),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(0),
    },
  },
  ctaContainer: {
    marginTop: theme.spacing(4),
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  ctaBtn: {
    marginLeft: theme.spacing(8),
  },
  customContainedBtn: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: "bold",
    "&:hover": {
      background: "#6A33FF",
    },
  },
  customOutlinedBtn: {
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.main,
    fontWeight: "bold",
  },
}));
