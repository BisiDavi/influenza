import { makeStyles } from "@material-ui/core";

export const headerStyle = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
    padding: theme.spacing(2, 3),
    width: "100%",
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
      fontWeight: "300",
    },
  },
}));