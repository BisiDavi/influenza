import { makeStyles } from "@material-ui/core";

export const formStyles = makeStyles((theme) => ({
    inputField: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        margin: theme.spacing(1, 0),
        padding: theme.spacing(1),
    },
    input: {
        marginTop: theme.spacing(1),
        width: "100%",
        "& input": {
            height: "12px",
        },
    },
}));
