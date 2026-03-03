import { render, screen } from "@testing-library/react";
import XButton from "./XButton";

describe("XButton", () => {
  it("renders without crashing", () => {
    render(<XButton onClick={() => {}} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders with screen reader text", () => {
    render(<XButton screenReaderText="Close" onClick={() => {}} />);
    expect(screen.getByText("Close")).toBeInTheDocument();
  });
});
