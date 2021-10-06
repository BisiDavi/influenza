import Image from "next/image";
import { Typography, Grid } from "@material-ui/core";
import { stepCardStyle } from "@styles/stepCard.style";

type stepType = {
    stage: string;
    title: string;
    image: string;
    description: string;
};

interface StepCardProps {
    step: stepType;
}

interface StepCardsProps {
    step: stepType[];
}

function StepCard({ step }: StepCardProps) {
    const classes = stepCardStyle();
    return (
        <Grid item className={classes.stepCard} xs={12} lg={4}>
            <Typography variant="h2">{step.stage}</Typography>
            <Typography variant="h4">{step.title}</Typography>
            <Image
                src={step.image}
                height={180}
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
        <Grid container className={classes.displayCards}>
            {step.map((item, index) => (
                <StepCard key={index} step={item} />
            ))}
        </Grid>
    );
}
