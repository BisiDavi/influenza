import { makeStyles } from "@material-ui/core";

export const homeSectionStyle = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(0, 4),
  },
  intro: {
    fontSize: theme.spacing(6),
    fontWeight: "bold",
    margin: theme.spacing(3, 0),
    textAlign: "center",
    "& span": {
      margin: theme.spacing(0, 1),
      textDecoration: "4px underline blue",
    },
  },
}));
