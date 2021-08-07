import { makeStyles } from "@material-ui/core";

export const homeSectionStyle = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(0, 4),
  },
  intro: {
    fontSize: theme.spacing(7),
    fontWeight: "bold",
    "& span": {
      margin: theme.spacing(0, 1),
      textDecoration: "4px underline blue",
    },
  },
}));
