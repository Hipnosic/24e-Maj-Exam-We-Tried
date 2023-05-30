import React from "react";
import Header from "./Header";
import Footer from "./Footer";

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
