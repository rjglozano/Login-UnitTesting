import TextInput from "./TextInput";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

describe("TextInput", () => {
  it("should be rendered", () => {
    const { getByPlaceholderText } = render(
      <TextInput placeholder="Test Input" />
    );
    expect(getByPlaceholderText("Test Input")).toBeInTheDocument();
  });

  it("should be able to type", () => {
    const { getByPlaceholderText } = render(
      <TextInput placeholder="Test Input" />
    );
    const input = getByPlaceholderText("Test Input");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("should render the label", () => {
    const { getByPlaceholderText } = render(
      <TextInput placeholder="Test Input" />
    );
    expect(getByPlaceholderText("Test Input")).toBeInTheDocument();
  });
});
