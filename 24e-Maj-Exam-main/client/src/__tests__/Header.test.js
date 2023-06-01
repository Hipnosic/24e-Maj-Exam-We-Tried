import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header/Header";

test("should render the sign in button", () => {
  // Render the component
  const { getByText } = render(<Header />);

  // Check if the Sign out button exists by its title
  const signInButton = getByText("Sign in");
  expect(signInButton).toBeInTheDocument();
});

//Renders an anchor (<a>) tag with an href attribute pointing to "/auth/login". Clicking on this link will navigate to the specified URL, triggering a page reload.
describe("Header", () => {
  it("renders the sign-in button", () => {
    const { getByText } = render(<Header />);
    const signInButton = getByText("Sign in");
    expect(signInButton).toBeInTheDocument();
  });
});
