import { makeStyles } from "@material-ui/core";
import colors from "./colors.style";

export const stepCardStyle = makeStyles((theme) => ({
  displayCards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "300px",
  },
  stepCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h2": {
      fontSize: theme.spacing(3) * 0.8,
      textAlign: "center",
      margin: theme.spacing(1, 0),
      color: colors.gray,
      fontWeight: "500",
    },
    "& h4": {
      fontSize: theme.spacing(3) * 0.75, //18px
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: theme.spacing(1),
    },
    "& h6": {
      fontSize: theme.spacing(2),
      fontWeight: "300",
      textAlign: "center",
      margin: theme.spacing(1, 0),
      lineHeight: theme.spacing(1) * 0.2,
    },
  },
}));
