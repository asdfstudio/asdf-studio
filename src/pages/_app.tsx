import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="google_tag_manager_id"
        strategy="afterInteractive"
        type="text/javascript"
      >
        {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PKT3RFN');
      `}
      </Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-RVB34B1X53"
      ></Script>
      <Script
        id="google_tag_manager"
        strategy="afterInteractive"
        type="text/javascript"
      >
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-RVB34B1X53');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
