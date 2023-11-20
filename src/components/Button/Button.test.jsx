import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should render the button", () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText("Test Button")).toBeInTheDocument();
  });

  it("should be clicked", () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Test Button</Button>
    );
    fireEvent.click(getByText("Test Button"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("should be disabled", () => {
    const { getByText } = render(<Button disabled>Test Button</Button>);
    expect(getByText("Test Button")).toBeDisabled();
  });

  it("should render the text inside the button correctly", () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText("Test Button")).toBeInTheDocument();
  });
});
