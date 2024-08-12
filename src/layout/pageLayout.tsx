import Head from "next/head";
import { FC } from "react";
import { Header } from "./header";
import { PageFooter } from "./pageFooter";

type Props = {
  children: React.ReactNode;
};

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={["mt-[60px]"].join(" ")}>{children}</main>
      <PageFooter />
    </>
  );
};

export default PageLayout;
export * from "./header";
