import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

const appTitle = "Car Photos";

describe("Header Component", () => {
  test("renders Header Component as Default Error Header without props", () => {
    render(<Header />);

    expect(screen.getByTestId("header")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("header-text")).toHaveTextContent(appTitle);
  });
});
