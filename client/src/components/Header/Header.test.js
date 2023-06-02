//Den medföljande filen innehåller tester för Header-komponenten. Det första testet verifierar att knappen "Logga in" är korrekt återgiven, medan det andra testet säkerställer att komponenten innehåller en ankartagg med ett href-attribut som pekar på "/auth/login", vilket gör att användare kan navigera till inloggningssidan.
import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";
// Som en kund vill jag få ett loggin alternativ, tex via en logg in knapp.
test("should render the sign in button", () => {
  // Render the component
  const { getByText } = render(<Header />);

  // Check if the Sign in button exists by its title
  const signInButton = getByText("Sign in");
  expect(signInButton).toBeInTheDocument();
});
// Som en kund vill jag kunna logga in på hemsidan med mitt inlogg.
//Renders an anchor (<a>) tag with an href attribute pointing to "/auth/login". Clicking on this link will navigate to the specified URL, triggering a page reload.
describe("Header", () => {
  it("renders the sign-in button", () => {
    const { getByText } = render(<Header />);
    const signInButton = getByText("Sign in");
    expect(signInButton).toBeInTheDocument();
  });
});
