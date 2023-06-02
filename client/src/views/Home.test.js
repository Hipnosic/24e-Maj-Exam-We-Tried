import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Home from "./Home";

test("see list of users", () => {
    render(<Home />);

    fireEvent.click(screen.getByText('Users'));
    expect(screen.getByText('Browsing as ADMIN')).toBeInTheDocument();
})