import React from "react";
import { render, screen } from "@testing-library/react";
import UsersTable from "./UsersTable";

describe("BooksTable", () => {
  test("renders without errors", async () => {
    render(<UsersTable />);
    expect(await screen.findByTestId("user-table")).toBeInTheDocument();
  });
});
describe("UsersTable", () => {
  test("renders an array of users", async () => {
    const usersData = [
      { username: "User1", role: "Admin" },
      { username: "User2", role: "User" },
    ];

    render(<UsersTable usersData={usersData} />);

    for (const user of usersData) {
      expect(await screen.findByTestId(user.username)).toBeInTheDocument();
      expect(await screen.findByTestId(user.role)).toBeInTheDocument();
    }
  });

  test("displays user information correctly", () => {
    const usersData = [
      { username: "User1", role: "Admin" },
      { username: "User2", role: "User" },
    ];

    render(<UsersTable usersData={usersData} />);

    for (const user of usersData) {
      expect(screen.getByText(user.username)).toBeInTheDocument();
      expect(screen.getByText(user.role)).toBeInTheDocument();
    }
  });
});
