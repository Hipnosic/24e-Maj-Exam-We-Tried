import React, { createContext } from 'react';
import { render, screen } from '@testing-library/react';
import UsersTable from './UsersTable';
import Home from '../../views/Home';

test('renders UsersTable component', () => {
  const userData = { username: "testuser", role: "USER"};
  const UserContext = createContext();
  // render(<Home loggedInAsUser={true}/>);
  render(<UsersTable />, {
    // Pass the sample user data via context or props
    wrapper: ({ children }) => (
      <UserContext.Provider value={{ userData }}>
        {children}
      </UserContext.Provider>
    ),
  });

  const usernameText = screen.getByText('Hello');

  expect(usernameText).toBeInTheDocument();

  // Use appropriate queries to find elements within the UsersTable component
  const promoteButton = screen.getByTestId('promoteButton');
  const deleteButton = screen.getByTestId('deleteButton');
  
  // Perform assertions or further testing based on the found elements
  // For example, you can check if the buttons are present, disabled, etc.
  expect(promoteButton).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
  expect(promoteButton).not.toBeDisabled();
  expect(deleteButton).not.toBeDisabled();
});
