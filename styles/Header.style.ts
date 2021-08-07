import { makeStyles } from "@material-ui/core";
import colors from "./colors.style";

export const headerStyle = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: colors.blue,
    color: "white",
    fontWeight: "bold",
    padding: theme.spacing(2, 3),
    width: "100%",
    fontSize: theme.spacing(3) * 0.8,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(3, 5),
  },
  gridContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  menuContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& a": {
      fontSize: theme.spacing(3),
      fontWeight: "400",
    },
  },
}));
