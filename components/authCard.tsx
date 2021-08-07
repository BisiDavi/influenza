import Link from "next/link";
import { Paper, Button, Typography } from "@material-ui/core";
import Input from "@components/input";

export default function AuthCard() {
  const formInput = [
    { label: "Name", id: "name", type: "text" },
    { label: "Work email or Phone Number", id: "email/number", type: "email" },
    { label: "Create Password", id: "password", type: "password" },
  ];
  return (
    <Paper elevation={3}>
      <Button>Register using Google</Button>
      <Button>Register using Linkedin</Button>
      <div>
        <span></span>
        <Typography component="h6">OR</Typography>
        <span></span>
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
        <Button>Register now</Button>
      </form>
    </Paper>
  );
}
