import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../../pages/HomePage";

const appTitle = "Car Photos";
const validState = { title: "test", images: [{ uri: "testUri" }] };
const setPhotoState = () => {};
const alertTitle = "Loading data has failed";
const alertMessage =
  "Loading data has failedCould not load data correctly. Please, contact our support.";

describe("Home Page", () => {
  test("renders Home Page correctly", () => {
    render(<HomePage state={validState} setPhotoState={setPhotoState} />);

    expect(screen.getByTestId("header")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("header-text")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("thumbnail-list")).toBeInTheDocument();
    expect(screen.queryByTestId("alert")).toBeNull();
  });

  test("renders Home Page without state with alert", () => {
    render(<HomePage />);

    expect(screen.getByTestId("header")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("header-text")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert")).toHaveTextContent(alertMessage);
    expect(screen.getByTestId("alert-title")).toBeInTheDocument();
    expect(screen.getByTestId("alert-title")).toHaveTextContent(alertTitle);
    expect(screen.queryByTestId("thumbnail-list")).toBeNull();
  });

  test("renders Home Page with empty state", () => {
    render(<HomePage state={{}} />);

    expect(screen.getByTestId("header")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("header-text")).toHaveTextContent(appTitle);
    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert")).toHaveTextContent(alertMessage);
    expect(screen.getByTestId("alert-title")).toBeInTheDocument();
    expect(screen.getByTestId("alert-title")).toHaveTextContent(alertTitle);
    expect(screen.queryByTestId("thumbnail-list")).toBeNull();
  });
});
