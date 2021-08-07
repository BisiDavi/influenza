import { makeStyles } from "@material-ui/core";

export const homeSectionStyle = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(0, 4),
    height: theme.spacing(90), //720px
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: theme.spacing(10),
  },
  banner: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
  },
  intro: {
    fontSize: theme.spacing(6),
    fontWeight: "bold",
    margin: theme.spacing(3, 0),
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    letterSpacing: theme.spacing(1) * 0.5,
    "& span": {
      margin: theme.spacing(0, 1),
      textDecoration: "4px underline blue",
    },
  },
  steps: {
    marginTop: theme.spacing(5),
  },
}));
