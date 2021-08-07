import { PropsWithChildren } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";

import Header from "@components/header";

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
    </div>
  );
}

interface LayoutProps {
  title: string;
}
