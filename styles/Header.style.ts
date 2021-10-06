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
        padding: theme.spacing(1, 2),
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
            fontSize: theme.spacing(2) * 1.2,
            fontWeight: "400",
        },
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "space-between",
    },
    registerButton: {
        backgroundColor: "green",
    },
    [theme.breakpoints.down("md")]: {
        menuContainer: {
            "& a": {
                fontSize: theme.spacing(2),
            },
        },
        gridContainer: {
            justifyContent: "space-between",
        },
        button: {
            fontSize: theme.spacing(2) * 0.8,
            padding: theme.spacing(1, 1),
            width: 100,
        },
    },
}));
