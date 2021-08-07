import Link from "next/link";
import { Paper, Button, Typography } from "@material-ui/core";
import Input from "@components/input";
import formInput from "@json/authcard.json";
import { authFormStyle } from "styles/authcard.style";

export default function AuthCard() {
  const classes = authFormStyle();
  return (
    <Paper className={classes.authForm} elevation={3}>
      <Button className={classes.button}>Register using Google</Button>
      <Button className={classes.button}>Register using Linkedin</Button>
      <div className={classes.text}>
        <hr />
        <Typography component="h6">OR</Typography>
        <hr />
      </div>
      <form>
        {formInput.map((input, index) => (
          <Input content={input} key={index} />
        ))}
        <Typography component="h6">
          By registering you agree to our
          <Link href="#terms" passHref>
            <a>terms and conditions</a>
          </Link>
        </Typography>
        <Button className={classes.registerButton} variant="contained">
          Register now
        </Button>
      </form>
    </Paper>
  );
}
