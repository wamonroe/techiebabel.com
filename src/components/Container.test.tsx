import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("Container", () => {
  it("renders children without crashing", () => {
    render(
      <Container>
        <p>Hello</p>
      </Container>
    );
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
