import React from "react";
import { render, screen } from "@testing-library/react";
//why do I need to import agin while setupTests.js already import?
import "@testing-library/jest-dom/extend-expect";
import App from "../../../layout/App";

describe("Header", () => {
  test("renders Header component", () => {
    render(<App />);

    // screen.debug();

    // explicit assertion
    // recommended
    //use string for exact match, and regex for partial match
    expect(screen.getByText("My Contacts")).toBeInTheDocument();
    // expect(screen.getByRole("heading")).toHaveTextContent("My Contacts");
  });
});
