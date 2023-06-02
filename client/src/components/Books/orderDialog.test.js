import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FormDialog from "./orderDialog";
// Som en kund vill jag kunna placera min order med ett knapptryck.
test("order button to order product", () => {
  render(<FormDialog />);

  fireEvent.click(screen.getByText("Order"));
  expect(screen.getByText("Order Product")).toBeInTheDocument();
});
