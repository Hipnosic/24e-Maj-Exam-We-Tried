import React from "react";
import { render } from "@testing-library/react";
import BooksTable from "../components/books/BooksTable";

describe("BooksTable", () => {
  it("renders an array of books with title, author, and quantity", () => {
    const booksData = [
      { title: "Book 1", author: "Author 1", quantity: 3 },
      { title: "Book 2", author: "Author 2", quantity: 5 },
      { title: "Book 3", author: "Author 3", quantity: 2 },
    ];

    const { getByText } = render(<BooksTable loggedInAsUser />);
    console.log(getByText);

    // Check if each book's title, author, and quantity are rendered
    booksData.forEach((book) => {
      expect(getByText(book.title)).toBeInTheDocument();
      expect(getByText(book.author)).toBeInTheDocument();
      expect(getByText(book.quantity.toString())).toBeInTheDocument();
    });
  });
});
