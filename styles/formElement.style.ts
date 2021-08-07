import { makeStyles } from "@material-ui/core";

export const formStyles = makeStyles((theme) => ({
  inputField: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: theme.spacing(3, 0),
  },
  input: {
    border: "1px solid black",
    borderRadius: "5px",
    marginTop: theme.spacing(1),
    width: "100%",
  },
}));
