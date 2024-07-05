import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.primary.dark,
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1.3),
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
}));
