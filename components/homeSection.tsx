import { Typography, Grid } from "@material-ui/core";

import { AuthCard, StepCards } from "@components/.";
import { homeSectionStyle } from "@styles/homeSection.style";
import steps from "@json/steps-home.json";
import TypedWord from "./typewriter";

export default function HomeSection() {
    const classes = homeSectionStyle();
    return (
        <Grid component="section" container className={classes.section}>
            <Grid className={classes.banner} item xs={12} md={9} lg={9}>
                <Typography className={classes.intro} variant="h1">
                    Hire the
                    <span>
                        <TypedWord />
                    </span>
                </Typography>
                <Grid className={classes.steps} md={4} item lg={12}>
                    <StepCards step={steps} />
                </Grid>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
                <AuthCard />
            </Grid>
        </Grid>
    );
}
