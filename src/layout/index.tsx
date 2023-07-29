import Head from 'next/head';
import { FC } from 'react';
import { Header } from './header';
import { Footer } from './footer';

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>[asdf]studio</title>
        <meta name="description" content="The complete solution agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://airlystudio.com/website_thumbnail@1x.png"
        />
        <link rel="icon" href="/airly-logo.svg" />
      </Head>
      <Header />
      <main className={['mt-[60px]'].join(' ')}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
export * from './header';
