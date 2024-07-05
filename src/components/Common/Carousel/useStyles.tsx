import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    margin: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0),
    },
  },
}));
