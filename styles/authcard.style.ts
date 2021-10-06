import { makeStyles } from "@material-ui/core";
import colors from "./colors.style";

export const authFormStyle = makeStyles((theme) => ({
    authForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(4, 2),
        borderRadius: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(2, 0),
        boxShadow:
            "0px 1px 0px -10px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
        width: "300px",
        textTransform: "inherit",
        fontSize: theme.spacing(2),
        fontWeight: "bold",
        backgroundColor: colors.cream,
    },
    text: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& hr": {
            color: "black",
            width: "120px",
        },
        "& h6": {
            margin: theme.spacing(0, 2),
        },
    },
    registerButton: {
        backgroundColor: colors.gray,
        width: "100%",
        color: "white",
        padding: theme.spacing(1, 0),
        margin: theme.spacing(2, 0),
        fontWeight: "bold",
        fontSize: theme.spacing(2),
    },
}));
