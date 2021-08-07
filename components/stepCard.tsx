import Image from "next/image";
import { Typography, Grid } from "@material-ui/core";
import { stepCardStyle } from "@styles/stepCard.style";

function StepCard({ step, style }: StepCardProps) {
  return (
    <Grid item className={style} xs={4}>
      <Typography variant="h2">{step.stage}</Typography>
      <Typography variant="h4">{step.title}</Typography>
      <Image
        src={step.image}
        height={200}
        width={250}
        alt={step.title}
        layout="fixed"
      />
      <Typography variant="h6">{step.description}</Typography>
    </Grid>
  );
}

export default function StepCards({ step }: StepCardsProps) {
  const classes = stepCardStyle();

  return (
    <div className={classes.displayCards}>
      {step.map((item, index) => (
        <StepCard style={classes.stepCard} key={index} step={item} />
      ))}
    </div>
  );
}

type stepType = {
  stage: string;
  title: string;
  image: string;
  description: string;
};

interface StepCardProps {
  step: stepType;
  style: any;
}

interface StepCardsProps {
  step: stepType[];
}
