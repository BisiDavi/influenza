import { Grid } from "@material-ui/core";
import HomeSection from "@components/homeSection";
import Layout from "@layouts/.";

export default function Home() {
  return (
    <Layout title="Home">
      <Grid container>
        <HomeSection />
      </Grid>
    </Layout>
  );
}
