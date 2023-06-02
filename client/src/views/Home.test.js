import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders Home component", () => {
  render(<Home />);

  // Check if the Home component is rendered
  expect(screen.getByTestId("home")).toBeInTheDocument();
});

test("displays 'Hello' when logged in as a user", () => {
  render(<Home />);

  // Check if the 'Hello' message is displayed
  expect(screen.getByText(/Successfully signed in/i)).toBeInTheDocument();
});
