import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home page", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(screen.getByText("techiebabel.com")).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Home />);
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });
});
