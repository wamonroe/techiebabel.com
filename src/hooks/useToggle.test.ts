import { act, renderHook } from "@testing-library/react";
import useToggle from "./useToggle";

describe("useToggle", () => {
  it("starts with open as false", () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.open).toBe(false);
  });

  it("sets open to true when handleOpen is called", () => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current.handleOpen());
    expect(result.current.open).toBe(true);
  });

  it("sets open to false when handleClose is called", () => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current.handleOpen());
    act(() => result.current.handleClose());
    expect(result.current.open).toBe(false);
  });

  it("toggles the value when handleToggle is called", () => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current.handleToggle());
    expect(result.current.open).toBe(true);
    act(() => result.current.handleToggle());
    expect(result.current.open).toBe(false);
  });
});
