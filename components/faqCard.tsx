import { useState } from "react";
import { Card, Paper, Grid, Typography } from "@material-ui/core";
import { footerStyles } from "@styles/footer.style";

type faqCardType = {
    answer: string;
    question: string;
};

interface FAQCardProps {
    content: faqCardType;
}

interface FAQCardsProps {
    cards: faqCardType[];
}

function FAQCard({ content }: FAQCardProps) {
    const [showAnswer, setShowAnswer] = useState(false);
    const classes = footerStyles();

    function showAnswerHandler() {
        setShowAnswer(!showAnswer);
    }

    const activeStyle = showAnswer ? "red" : "blue";

    return (
        <Card className={classes.faq}>
            <Paper
                elevation={4}
                className={classes.question}
                onClick={showAnswerHandler}
            >
                <span style={{ backgroundColor: activeStyle }}></span>
                <Typography variant="h3">{content.question}</Typography>
            </Paper>
            {showAnswer && (
                <div className={classes.answer}>
                    <Typography variant="body1">{content.answer}</Typography>
                </div>
            )}
        </Card>
    );
}

export default function FAQCards({ cards }: FAQCardsProps) {
    return (
        <Grid container className="faq-cards">
            {cards.map((card, index) => (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                    <FAQCard content={card} />
                </Grid>
            ))}
        </Grid>
    );
}
