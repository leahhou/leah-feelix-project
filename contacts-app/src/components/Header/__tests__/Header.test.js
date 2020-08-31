import React from "react";
import { render, screen } from "@testing-library/react";
//why do I need to import agin while setupTests.js already import?
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header";

describe("Header", () => {
  const mockHandleClick = jest.fn();
  const pageTitle = "My Contacts";
  const buttonText = "Add";
  test("Header component should contains Page Title that passed as a prop", () => {
    render(
      <Header
        type=""
        text={buttonText}
        header={pageTitle}
        handleClick={mockHandleClick}
      />
    );
    // explicit assertion
    // recommended
    //use string for exact match, and regex for partial match
    expect(screen.getByText("My Contacts")).toBeInTheDocument();
  });
  test("Header component contains a button with text passed it as a prop", () => {
    const mockHandleClick = jest.fn();
    render(
      <Header
        type=""
        text={buttonText}
        header={pageTitle}
        handleClick={mockHandleClick}
      />
    );
    expect(screen.getByText("Add")).toBeInTheDocument();
  });
  test("Header component contains a button that is clickable", () => {
    const mockHandleClick = jest.fn();
    render(
      <Header
        type=""
        text={buttonText}
        header={pageTitle}
        handleClick={mockHandleClick}
      />
    );
    expect(screen.getByText("Add")).toBeInTheDocument();
  });
});
