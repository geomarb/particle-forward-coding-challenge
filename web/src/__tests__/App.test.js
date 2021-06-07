import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

const appTitle = "Car Photos";
const validState = { title: "test", images: [{ uri: "testUri" }] };
const alertTitle = "Oops! Something went wrong!";
const alertMessage =
  "Oops! Something went wrong!Please try again later or contact our support!";

describe("App", () => {
  test("renders App correctly", () => {
    render(<App state={validState} />);

    expect(screen.getByTestId("header")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("header-text")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("thumbnail-list")).toBeInTheDocument();
    expect(screen.queryByTestId("alert")).toBeNull();
  });

  test("renders App with error", () => {
    render(<App error="error" />);

    expect(screen.getByTestId("header")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("header-text")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("alert-title")).toBeInTheDocument();
    expect(screen.getByTestId("alert-title")).toHaveTextContent(alertTitle);
    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert")).toHaveTextContent(alertMessage);
    expect(screen.queryByTestId("thumbnail-list")).toBeNull();
  });

  test("renders loading App", () => {
    render(<App isLoading={true} />);

    expect(screen.getByTestId("header")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("header-text")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
    expect(screen.queryByTestId("alert")).toBeNull();
    expect(screen.queryByTestId("thumbnail-list")).toBeNull();
  });
});
