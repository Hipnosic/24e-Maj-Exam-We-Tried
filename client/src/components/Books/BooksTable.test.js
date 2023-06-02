import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BooksTable from "./BooksTable";
// Som en kund vill jag kunna få upp en lista på böcker utan problem, vill inte få error.
describe("BooksTable", () => {
  test("renders without errors", async () => {
    render(<BooksTable />);
    expect(await screen.findByTestId("books-table")).toBeInTheDocument();
  });
  // Som en kund vill jag kunna se all info om böckerna jag är intresserad av, det vill säga vill jag kunna se om det finns några i lager.
  test("displays books data correctly", () => {
    const booksData = [
      { author: "Author 1", quantity: 10, title: "Book 1" },
      { author: "Author 2", quantity: 5, title: "Book 2" },
    ];

    render(<BooksTable booksData={booksData} />);

    async function findBooksData() {
      for (const book of booksData) {
        expect(await screen.findByTestId(book.author)).toBeInTheDocument();
        expect(
          await screen.findByTestId(book.quantity.toString())
        ).toBeInTheDocument();
        expect(await screen.findByTestId(book.title)).toBeInTheDocument();
      }
    }
    findBooksData();
  });
});
//   test("invokes handleDelete function on delete button click", async () => {
//     const mockHandleDelete = jest.fn();
//     const bookTitle = "Book Title";

//     render(<BooksTable loggedInAsAdmin handleDelete={mockHandleDelete} />);

//     fireEvent.click(await screen.findByTestId("Delete"));

//     expect(mockHandleDelete).toHaveBeenCalledWith(bookTitle);
//   });
// });
