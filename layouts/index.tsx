import { PropsWithChildren } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";

import Header from "@components/header";
import Footer from "@components/footer";

const useStyles = makeStyles({
  layout: {
    width: "100%",
  },
});
export default function Layout({
  children,
  title,
}: PropsWithChildren<LayoutProps>) {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Head>
        <title> Hire-Now | {title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

interface LayoutProps {
  title: string;
}
