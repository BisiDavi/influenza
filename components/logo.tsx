import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  logo: {
    fontWeight: "bold",
    fontSize: "25px",
    lineHeight: "20px",
  },
});

export default function Logo() {
  const classes = useStyle();
  return (
    <div>
      <h1 className={classes.logo}>Influenza</h1>
    </div>
  );
}
