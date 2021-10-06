import clsx from "clsx";
import Link from "next/link";
import { Grid, Button } from "@material-ui/core";

import Logo from "@components/logo";
import { headerStyle } from "@styles/Header.style";

export default function Header() {
    const menuLink = [
        { name: "Home", link: "#" },
        { name: "Browse Influencers", link: "#browse-influencers" },
        { name: "Browse Campaigns", link: "#browse-campaigns" },
    ];

    const classes = headerStyle();

    return (
        <Grid component="header" container className={classes.container}>
            <Grid item xs={1}>
                <Logo />
            </Grid>
            <Grid item xs={7} md={9} className={classes.gridContainer}>
                <Grid item xs={8} md={6} className={classes.menuContainer}>
                    {menuLink.map((menu, index) => (
                        <Link key={index} href={menu.link}>
                            <a>{menu.name}</a>
                        </Link>
                    ))}
                </Grid>
                <Grid item className={classes.buttonGroup} md={4} xs={3}>
                    <Button className={classes.button}>Hire Now</Button>
                    <Button
                        className={clsx(classes.button, classes.registerButton)}
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}
