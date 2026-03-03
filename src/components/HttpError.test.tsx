import { screen } from "@testing-library/react";
import renderWithRouter from "../../test/renderWithRouter";
import HttpError from "./HttpError";

describe("HttpError", () => {
  it("renders without crashing", () => {
    renderWithRouter(<HttpError status="404" message="Not Found" details="Page not found" />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Not Found")).toBeInTheDocument();
    expect(screen.getByText("Page not found")).toBeInTheDocument();
  });

  it("renders the home link", () => {
    renderWithRouter(<HttpError status="500" message="Error" details="Something broke" />);
    expect(screen.getByRole("link", { name: /take me out of here/i })).toBeInTheDocument();
  });
});
