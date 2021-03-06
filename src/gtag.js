import * as React from 'react';

const GA_TRACKING_ID = 'GTM-P4DJ4N2';
const GA_OPTIMIZE_ID = 'OPT-5K72PSC';

export const GtagScript = () => {
  function intercept() {
    const qs = document.querySelector('#gtm-js');
    if (qs !== null) {
      qs.addEventListener('load', () => {});
    }
  }

  return (
    <>
      <script
        id='gtm-js'
        async
        src={`https://www.googletagmanager.com/gtm.js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}',{ 'optimize_id': '${GA_OPTIMIZE_ID}'} );
            (${intercept.toString()})()
            `,
        }}
      />
    </>
  );
};
const style = {
  display: 'none',
  visibility: 'hidden',
};
export const GtagNoscript = (props) => (
  <>
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
        height='0'
        width='0'
        style={style}
      />
    </noscript>
  </>
);
