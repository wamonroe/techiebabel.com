import { render, screen } from "@testing-library/react";
import Modal from "./index";

describe("Modal", () => {
  it("renders children when open", () => {
    render(
      <Modal open={true} onClose={() => {}}>
        <Modal.Title>Test Title</Modal.Title>
        <Modal.Content>Test Content</Modal.Content>
        <Modal.Actions>
          <button>OK</button>
        </Modal.Actions>
      </Modal>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("does not render children when closed", () => {
    render(
      <Modal open={false} onClose={() => {}}>
        <Modal.Content>Hidden Content</Modal.Content>
      </Modal>
    );
    expect(screen.queryByText("Hidden Content")).not.toBeInTheDocument();
  });
});
