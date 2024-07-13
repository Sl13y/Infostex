import React from "react";
import PageRouter from "../PageRouter/PageRouter";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import styles from './Footer/Footer.css';

const Layout = () => {
  return (
    <>
      <Header />
      <PageRouter />
      <Footer />
    </>
  );
};

export default Layout;
