import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const LayoutContainer = ({ children }) => {
  return (
    <>
      <Header />
      {children && children}
      <Footer />
    </>
  );
};

export default LayoutContainer;
