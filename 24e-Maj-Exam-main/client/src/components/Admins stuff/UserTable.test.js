const { render, screen, waitFor } = require("@testing-library/react");
const UsersTable = require("./UsersTable").default;
const axios = require("axios");

test("fetches user data and displays it", async () => {
  render(<UsersTable />);

  // Mock the response data
  const mockResponse = {
    data: {
      users: [
        { username: "user1", role: "admin" },
        { username: "user2", role: "user" },
        { username: "user3", role: "user" },
      ],
    },
  };

  // Mock the sessionStorage.getItem() function
  jest
    .spyOn(sessionStorage, "getItem")
    .mockImplementation(() => JSON.stringify({ token: "mockToken" }));

  // Mock the axios.get() function
  jest.spyOn(axios, "get").mockResolvedValueOnce(mockResponse);

  // Wait for the data to be fetched
  await waitFor(() => {
    const usernameElements = screen.getAllByRole("cell", { name: /username/i });
    expect(usernameElements).toHaveLength(3);
  });

  // Perform separate assertions outside of the waitFor callback
  const usernameElements = screen.getAllByRole("cell", { name: /username/i });
  expect(usernameElements[0]).toHaveTextContent("user1");
  expect(usernameElements[1]).toHaveTextContent("user2");
  expect(usernameElements[2]).toHaveTextContent("user3");
});
