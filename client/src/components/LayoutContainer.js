//Den medföljande filen är en layoutbehållarkomponent som fungerar som det yttre omslaget för programmets layout. Den inkluderar sidhuvudskomponenten överst, följt av underordnade komponenter som innehåll, och slutar med sidfotskomponenten längst ner. Det ger en konsekvent layoutstruktur för programmets sidor.
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
