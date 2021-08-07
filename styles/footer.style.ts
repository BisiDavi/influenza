import { makeStyles } from "@material-ui/core";
import colors from "./colors.style";

export const footerStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: colors.cream,
    width: "100%",
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h1": {
      fontWeight: "bold",
      fontSize: theme.spacing(4),
      textAlign: "center",
    },
  },
  faq: {
    margin: theme.spacing(4),
    padding: theme.spacing(2, 2),
    "& h3": {
      fontSize: theme.spacing(2),
      fontWeight: "500",
    },
  },
  question: {
    padding: theme.spacing(2),
    fontSize: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    paddingLeft: 0,
    "& span": {
      height: theme.spacing(5),
      width: theme.spacing(1) * 1.2,
      marginRight: theme.spacing(1) * 1.2,
    },
  },
  answer: {
    paddingTop: theme.spacing(1),
  },
}));
