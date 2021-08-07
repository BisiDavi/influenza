import { Typography } from "@material-ui/core";
import { footerStyles } from "@styles/footer.style";
import cards from "@json/footer.json";

import FAQCards from "./faqCard";

export default function Footer() {
  const classes = footerStyles();
  return (
    <footer className={classes.footer}>
      <Typography component="h1">Popular FAQ&#39;S</Typography>
      <FAQCards cards={cards} />
    </footer>
  );
}
