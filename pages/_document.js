import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as React from 'react';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  render() {
    const { pageContext } = this.props;

    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <meta charSet='utf-8' />
          {/* Google Tag Manager */}
          <script
              dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','${process.env.GTM_ID}');`,
              }}
          />
          {/* End Google Tag Manager */}
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript
              dangerouslySetInnerHTML={{
                  __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
          />
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  let pageContext;

  // @ts-ignore
  const page = ctx.renderPage((Component) => {
    return (props) => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };
  });

  let css;

  if (pageContext) {
    css = pageContext.sheetsRegistry.toString();
  }

  return {
    ...page,
    pageContext,
    styles: (
      <>
        <style
          id='jss-server-side'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: css }}
        />
        {flush() || null}
      </>
    ),
  };
};

export default MyDocument;
