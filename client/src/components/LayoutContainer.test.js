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
