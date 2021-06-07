import React from "react";
import { render, screen } from "@testing-library/react";
import ThumbnailItem from "../../components/ThumbnailItem";
import path from "path";

const alertTitle = "Loading thumbnail image fail";
const alertMessage = "Something went wrong!";
const props = {
  uri: `file://${path.join(__dirname, "../fixtures/test")}`,
  title: "testTitle",
  setPhotoState: () => {},
};

describe("ThumbnailItem Component", () => {
  test("renders ThumbnailItem Component correctly", () => {
    render(<ThumbnailItem {...props} />);

    expect(screen.getByTestId("thumbnail-item")).toBeInTheDocument();
    expect(screen.getByTestId("thumbnail-item").src).toBe(`${props.uri}_2.jpg`);
    expect(screen.getByTestId("thumbnail-item").title).toBe(props.title);
    expect(screen.getByTestId("thumbnail-item").alt).toBe(props.title);
    expect(screen.getByTestId("thumbnail-skeleton")).toBeInTheDocument();
  });

  test("renders ThumbnailItem Component without props", () => {
    render(<ThumbnailItem />);

    expect(screen.queryByTestId("header")).toBeNull();
    expect(screen.queryByTestId("header-text")).toBeNull();
    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert")).toHaveTextContent(alertMessage);
    expect(screen.getByTestId("alert")).toHaveClass("MuiAlert-standardError");
    expect(screen.getByTestId("alert-title")).toBeInTheDocument();
    expect(screen.getByTestId("alert-title")).toHaveTextContent(alertTitle);
  });
});
