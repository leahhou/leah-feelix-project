import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Input from "../Input";

describe("Input", () => {
  const mockHandlInputChange = jest.fn();
  const htmlFor = "firstName";
  const type = "text";
  const label = "First Name";
  const invalidMessage = "";

  test("input label and input box should shown on the page", () => {
    render(
      <Input
        htmlFor={htmlFor}
        type={type}
        label={label}
        value=""
        invalidMessage={invalidMessage}
        handleInputChange={mockHandlInputChange}
      />
    );
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("user input should show on the page", async () => {
    render(
      <Input
        htmlFor={htmlFor}
        type={type}
        label={label}
        value=""
        invalidMessage={invalidMessage}
        handleInputChange={mockHandlInputChange}
      />
    );

    expect(screen.queryByText(/leah/)).toBeNull();

    await userEvent.type(screen.getByRole("textbox"), "leah");
    // await fireEvent.change(screen.getByRole("textbox"), {
    //   target: { value: "leah" }
    // });

    expect(mockHandlInputChange).toHaveBeenCalledTimes(4);
  });

  test("Input can show invalidMessage", async () => {
    render(
      <Input
        htmlFor={htmlFor}
        type={type}
        label={label}
        value=""
        invalidMessage="show invalid message"
        handleInputChange={mockHandlInputChange}
      />
    );
    expect(screen.getByText("show invalid message")).toBeInTheDocument();
  });
});
