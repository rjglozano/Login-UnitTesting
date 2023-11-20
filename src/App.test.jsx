import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import LoginForm from "./components/LoginForm";

describe("App Tests", () => {
  it("should render the App", () => {
    const { getByText, getByPlaceholderText } = render(<LoginForm />);
    expect(getByPlaceholderText("Username")).toBeInTheDocument();
    expect(getByPlaceholderText("Password")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
  });

  it("should enable the button if two textboxes were typed", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const usernameInput = getByPlaceholderText("Username");
    const passwordInput = getByPlaceholderText("Password");
    const loginButton = getByText("Login");

    fireEvent.change(usernameInput, { target: { value: "root" } });
    fireEvent.change(passwordInput, { target: { value: "root" } });

    expect(loginButton).not.toBeDisabled();
  });
});
