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

  const sandboxHead = <>
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

 const liveHead = <>
 <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=Pob-kIDH8D6JNGKasEnsKw&gtm_preview=env-56&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P4DJ4N2');</script>
</>

  if (window) {
    const hostname = window.location.hostname;
    return (hostname == 'https://evro-sandbox.vercel.app/' ? sandboxHead
    : liveHead)
    

 }
 



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
