import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../../components/Alert";

const appTitle = "Car Photos";
const alertTitle = "Title";
const alertMessage = "Something went wrong!";

describe("Alert Component", () => {
  test("renders Alert Component as Default Error Alert without props", () => {
    render(<Alert />);

    expect(screen.queryByTestId("header")).toBeNull();
    expect(screen.queryByTestId("header-text")).toBeNull();
    expect(screen.queryByTestId("alert-title")).toBeNull();
    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert")).toHaveTextContent(alertMessage);
    expect(screen.getByTestId("alert")).toHaveClass("MuiAlert-standardError");
  });

  test("renders Alert Component as Default Error Alert with title", () => {
    render(<Alert title={alertTitle} />);

    expect(screen.getByTestId("alert-title")).toBeInTheDocument();
    expect(screen.getByTestId("alert-title")).toHaveTextContent(alertTitle);
    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert")).toHaveTextContent(alertMessage);
    expect(screen.getByTestId("alert")).toHaveClass("MuiAlert-standardError");
    expect(screen.queryByTestId("header")).toBeNull();
    expect(screen.queryByTestId("header-text")).toBeNull();
  });

  test("renders Alert Component as Default Error Alert with title and Header", () => {
    render(<Alert title={alertTitle} showHeader />);

    expect(screen.getByTestId("header")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("header-text")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("alert-title")).toBeInTheDocument();
    expect(screen.getByTestId("alert-title")).toHaveTextContent(alertTitle);
    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert")).toHaveTextContent(alertMessage);
    expect(screen.getByTestId("alert")).toHaveClass("MuiAlert-standardError");
  });

  test("renders Alert Component as Default Error Alert with title, Header and custom message", () => {
    const customMessage = "custom message";
    render(<Alert title={alertTitle} showHeader message={customMessage} />);

    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert")).toHaveTextContent(customMessage);
    expect(screen.getByTestId("alert")).toHaveClass("MuiAlert-standardError");
    expect(screen.getByTestId("header")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("header-text")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("alert-title")).toBeInTheDocument();
    expect(screen.getByTestId("alert-title")).toHaveTextContent(alertTitle);
  });

  test("renders Alert Component as Warning Alert with title, Header and custom message", () => {
    const customMessage = "custom message";
    render(
      <Alert
        title={alertTitle}
        showHeader
        message={customMessage}
        severity={"warning"}
      />
    );

    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert")).toHaveTextContent(customMessage);
    expect(screen.getByTestId("alert")).toHaveClass("MuiAlert-standardWarning");
    expect(screen.getByTestId("header")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("header-text")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("alert-title")).toBeInTheDocument();
    expect(screen.getByTestId("alert-title")).toHaveTextContent(alertTitle);
  });
});
