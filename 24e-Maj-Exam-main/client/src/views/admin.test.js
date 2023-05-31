import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Admin from "./admin";

describe("Button", () => {
  it("should call a function when clicked", async () => {
    render(<Admin />);

    fireEvent.click(screen.getByText("Order"));
    console.log("Click was successful");

    await waitFor(() => {
      expect();
    });
  });
});
