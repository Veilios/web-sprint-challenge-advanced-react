import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm />);

    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", async () => {

    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    fireEvent.change(firstNameInput, {target: {value: "Alan"}});
    fireEvent.change(lastNameInput, {target: {value: "Mir"}});
    fireEvent.change(addressInput, {target: {value: "3002 Atlantis Lane"}});
    fireEvent.change(cityInput, {target: {value: "Olypmus"}});
    fireEvent.change(stateInput, {target: {value: "Narnia"}});
    fireEvent.change(zipInput, {target: {value: 30042}});

    expect(firstNameInput).toHaveValue("Alan");
    expect(lastNameInput).toHaveValue("Mir");
    expect(addressInput).toHaveValue("3002 Atlantis Lane");
    expect(cityInput).toHaveValue("Olypmus");
    expect(stateInput).toHaveValue("Narnia");
    expect(zipInput).toHaveValue("30042");

    expect(lastNameInput).not.toHaveValue("Alex");
    expect(cityInput).not.toHaveValue("Asgard");
    expect(zipInput).not.toHaveValue("333333");

    const checkoutButton = screen.getByRole("button", /checkout/i);
    fireEvent.click(checkoutButton);

    const order = await screen.findByTestId("successMessage");
    expect(order).toBeTruthy();

});
