import React from "react";
import { render, screen } from "@testing-library/react";
import NotFoundPage from "../../pages/NotFoundPage";

const appTitle = "Car Photos";
const alertTitle = "Page not found!";
const alertMessage =
  "Page not found!The page you are trying to access does not exists. Please go to our home page.";

describe("Not Found Page", () => {
  test("renders Not Found Page with header and default message", () => {
    render(<NotFoundPage showHeader />);

    expect(screen.getByTestId("header")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("header-text")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert")).toHaveTextContent(alertMessage);
    expect(screen.getByTestId("alert-title")).toBeInTheDocument();
    expect(screen.getByTestId("alert-title")).toHaveTextContent(alertTitle);
    expect(screen.queryByTestId("thumbnail-list")).toBeNull();
  });

  test("renders Not Found without header", () => {
    render(<NotFoundPage />);

    expect(screen.queryByTestId("header")).toBeNull();
    expect(screen.queryByTestId("header-text")).toBeNull();
    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert")).toHaveTextContent(alertMessage);
    expect(screen.getByTestId("alert-title")).toBeInTheDocument();
    expect(screen.getByTestId("alert-title")).toHaveTextContent(alertTitle);
    expect(screen.queryByTestId("thumbnail-list")).toBeNull();
  });

  test("renders Not Found Page with custom message", () => {
    const customMessage = "Custom message";
    render(<NotFoundPage message={customMessage} />);

    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert")).toHaveTextContent(customMessage);
    expect(screen.getByTestId("alert-title")).toBeInTheDocument();
    expect(screen.getByTestId("alert-title")).toHaveTextContent(alertTitle);
  });
});
