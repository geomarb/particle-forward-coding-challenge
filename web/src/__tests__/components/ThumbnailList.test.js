import React from "react";
import { render, screen } from "@testing-library/react";
import ThumbnailList from "../../components/ThumbnailList";
import path from "path";

const alertTitle = "Loading thumbnail image fail";
const alertMessage = "No car images found";
const props = {
  images: [{ uri: `file://${path.join(__dirname, "../fixtures/test")}` }],
  title: "testTitle",
  setPhotoState: () => {},
};

describe("ThumbnailList Component", () => {
  test("renders ThumbnailList Component correctly", () => {
    render(<ThumbnailList {...props} />);

    expect(screen.getByTestId("thumbnail-item")).toBeInTheDocument();
    expect(screen.getByTestId("thumbnail-item").src).toBe(
      `${props.images[0].uri}_2.jpg`
    );
    expect(screen.getByTestId("thumbnail-item").title).toBe(props.title);
    expect(screen.getByTestId("thumbnail-item").alt).toBe(props.title);
    expect(screen.getByTestId("thumbnail-skeleton")).toBeInTheDocument();
  });

  test("renders ThumbnailList Component without props", () => {
    render(<ThumbnailList />);

    expect(screen.queryByTestId("header")).toBeNull();
    expect(screen.queryByTestId("header-text")).toBeNull();
    expect(screen.getByTestId("alert")).toBeInTheDocument();
    expect(screen.getByTestId("alert")).toHaveTextContent(alertMessage);
    expect(screen.getByTestId("alert")).toHaveClass("MuiAlert-standardInfo");
    expect(screen.queryByTestId("alert-title")).toBeNull();
  });
});
