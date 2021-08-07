import { Typography, Grid } from "@material-ui/core";

import { AuthCard, StepCards } from "@components/.";
import { homeSectionStyle } from "@styles/homeSection.style";
import steps from "@json/steps-home.json";

export default function HomeSection() {
  const classes = homeSectionStyle();
  return (
    <Grid component="section" container className={classes.section}>
      <Grid item xs={8}>
        <Typography className={classes.intro} variant="h1">
          Hire the
          <span>best Influencers.</span>
        </Typography>
        <Grid item xs={12}>
          <StepCards step={steps} />
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <AuthCard />
      </Grid>
    </Grid>
  );
}
