//Den tillhandahållna filen är en testfil som verifierar inloggningsfunktionens funktionalitet. Den återger inloggningskomponenten i en BrowserRouter, simulerar en användarinloggning genom att fylla i fälten för användarnamn och lösenord och klicka på inloggningsknappen, och förväntar sig att hitta ett framgångsmeddelande som indikerar en lyckad inloggning.
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "./login";

//Som en kund vill jag kunna logga in så jag kan se produkter
describe("HomePage", () => {
  it("renders order button when logged in", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const usernameInput = screen.getByTestId("username-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(usernameInput, {
      target: { value: "Yves" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "123" },
    });
    fireEvent.click(loginButton);
    console.log("Click was successful");

    const loginMsg = await screen.findByText("Successfully signed in");
    expect(loginMsg).toBeInTheDocument();
  });
});
