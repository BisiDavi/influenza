import { Typography } from "@material-ui/core";
import { footerStyles } from "@styles/footer.style";

export default function Footer() {
  const classes = footerStyles();
  return (
    <footer className={classes.footer}>
      <Typography component="h1">Popular FAQ&#39;S</Typography>
    </footer>
  );
}
