import renderWithRouter from "@/test/renderWithRouter";
import { screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFound page", () => {
  it("renders without crashing", () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page not found")).toBeInTheDocument();
  });
});
