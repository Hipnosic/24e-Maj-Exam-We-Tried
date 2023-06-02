import React, { createContext } from "react";
import { render } from "@testing-library/react";
import UsersTable from "./UsersTable";

test("buttons for logged-in user are disabled", () => {
  // Sample user data

  const UserContext = createContext();

  const userData = {
    username: "Bob",
    password: "123",
    token: "sample-token",
  };

  // Render the UsersTable component
  const { getByText } = render(<UsersTable />, {
    // Pass the sample user data via context or props
    wrapper: ({ children }) => (
      <UserContext.Provider value={{ userData }}>
        {children}
      </UserContext.Provider>
    ),
  });

  // Find the promote and delete buttons for the logged-in user
  const promoteButton = getByText("Promote");
  const deleteButton = getByText("Delete");

  // Assert that the buttons are disabled
  expect(promoteButton).toBeDisabled();
  expect(deleteButton).toBeDisabled();
});
