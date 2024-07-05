import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  skillItemContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1.3),
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
}));
