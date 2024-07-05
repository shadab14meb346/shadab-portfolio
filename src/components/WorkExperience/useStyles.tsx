import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "space-between",
    flexFlow: "wrap",
  },
  customFontSize: {
    fontSize: "117px",
    lineHeight: "140px",
  },
  workExperienceCardContainer: {
    maxWidth: 368,
  },
}));
