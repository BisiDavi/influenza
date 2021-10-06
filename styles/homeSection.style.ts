import { makeStyles } from "@material-ui/core";

export const homeSectionStyle = makeStyles((theme) => ({
    section: {
        padding: theme.spacing(0, 4),
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(4),
    },
    banner: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: 20,
    },
    intro: {
        fontSize: "35px",
        fontWeight: "bold",
        margin: theme.spacing(0),
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
