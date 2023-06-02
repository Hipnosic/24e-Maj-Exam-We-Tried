import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FormDialog from "./orderDialog"

test("order button to order product", () => {
    render(<FormDialog />);


    //Fanns ingen endpoint för att beställa produkter i githuben så finns ingen fetch.
    fireEvent.click(screen.getByText('Order'));
    expect(screen.getByText('Order Product')).toBeInTheDocument();
})