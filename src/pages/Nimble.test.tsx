import { render, screen } from "@testing-library/react";
import Nimble from "./Nimble";

describe("Nimble page", () => {
  it("renders without crashing", () => {
    render(<Nimble />);
    expect(screen.getByText("Attack Roller")).toBeInTheDocument();
    expect(screen.getByText("Action Trackers")).toBeInTheDocument();
  });
});
