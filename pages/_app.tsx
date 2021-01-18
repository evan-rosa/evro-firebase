import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Router from 'next/router';
import { GTMPageView } from '../config/gtm';
import { useEffect } from 'react';


import { AppProps } from 'next/app';



function MyApp({ Component, pageProps }: AppProps) {


  // Initiate GTM
  useEffect(() => {
      const handleRouteChange = (url: string) => GTMPageView(url);
      Router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
          Router.events.off('routeChangeComplete', handleRouteChange);
      };
  }, []);

}

export default MyApp;
