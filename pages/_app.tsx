import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from 'next/router';
import { GTMPageView } from '../config/gtm';
import React, { useEffect } from 'react';
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    // Initiate GTM
    useEffect(() => {
      const handleRouteChange = (url: string) => GTMPageView(url);
      Router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
          Router.events.off('routeChangeComplete', handleRouteChange);
      };
  }, []);

    return <Component {...pageProps} />;
  }
}

export default MyApp;
