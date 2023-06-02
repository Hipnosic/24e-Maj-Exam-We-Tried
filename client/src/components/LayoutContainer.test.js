//Den medföljande filen innehåller testfall för LayoutContainer-komponenten. Den verifierar att LayoutContainer återger sidhuvuds- och sidfotskomponenterna korrekt, samt återger det tillhandahållna underordnade innehållet i den. Dessa tester säkerställer korrekt rendering och integration av layoutkomponenterna i applikationen.
import React from "react";
import { render, screen } from "@testing-library/react";
import LayoutContainer from "./LayoutContainer";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

describe("LayoutContainer", () => {
  test("renders Header and Footer components", () => {
    render(
      <LayoutContainer>
        <div>Content</div>
      </LayoutContainer>
    );

    expect(screen.getByRole("banner")).toBeInTheDocument(); // Assumes Header component has a role of "banner"
    expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // Assumes Footer component has a role of "contentinfo"
  });

  test("renders children content", () => {
    render(
      <LayoutContainer>
        <div>Content</div>
      </LayoutContainer>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
