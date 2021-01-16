import React, { useEffect } from 'react';
import '../styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
