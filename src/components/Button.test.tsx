import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders without crashing", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("renders with all color variants", () => {
    const { unmount: u1 } = render(<Button color="primary">P</Button>);
    u1();
    const { unmount: u2 } = render(<Button color="secondary">S</Button>);
    u2();
    render(<Button color="soft">So</Button>);
  });
});
