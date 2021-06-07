import React from "react";
import { render, screen } from "@testing-library/react";
import PhotoPage from "../../pages/PhotoPage";
import path from "path";

const alertTitle = "Page not found!";
const alertMessage = "Invalid operation";
const props = {
  uri: `${path.join(__dirname, "../fixtures/test")}`,
  title: "testTitle",
};

describe("Photo Page", () => {
  test("renders Photo Page correctly", () => {
    render(<PhotoPage uri={props} />);

    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("close-icon")).toBeInTheDocument();
    expect(screen.getByTestId("photo-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("photo")).toBeInTheDocument();
    expect(screen.getByTestId("photo")).toBeInTheDocument();

    expect(screen.queryByTestId("header")).toBeNull();
    expect(screen.queryByTestId("header-text")).toBeNull();
    expect(screen.queryByTestId("alert")).toBeNull();
    expect(screen.queryByTestId("alert-title")).toBeNull();
    expect(screen.queryByTestId("thumbnail-list")).toBeNull();
  });

  test("renders Photo Page without props", () => {
    render(<PhotoPage />);

    expect(screen.queryByTestId("header")).toBeNull();
    expect(screen.queryByTestId("header-text")).toBeNull();
    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert")).toHaveTextContent(alertMessage);
    expect(screen.getByTestId("alert-title")).toBeInTheDocument();
    expect(screen.getByTestId("alert-title")).toHaveTextContent(alertTitle);
  });
});
