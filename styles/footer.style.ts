import { makeStyles } from "@material-ui/core";
import colors from "./colors.style";

export const footerStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: colors.cream,
    width: "100%",
    height: theme.spacing(50), //400px
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
}));
