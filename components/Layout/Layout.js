import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO/SEO";

import React, { useState, useEffect } from "react";

const Layout = ({ siteTitle, children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,300;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css"
        ></link>
        <script
          src="https://kit.fontawesome.com/fac3af6c8d.js"
          crossorigin="anonymous"
        ></script>
        <SEO />
        <title>{siteTitle || "Gaël David"}</title>
        <body className="🌞" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
