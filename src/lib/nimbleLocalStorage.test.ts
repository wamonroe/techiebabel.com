import type { ActionTrackerType } from "./nimbleLocalStorage";
import { cloneActionTracker, combineActionTrackers } from "./nimbleLocalStorage";

const makeTracker = (overrides: Partial<ActionTrackerType> = {}): ActionTrackerType => ({
  id: "test-id",
  name: "Test Tracker",
  actions: { 1: true, 2: true, 3: true },
  ...overrides
});

describe("cloneActionTracker", () => {
  it("returns a deep copy that does not share references", () => {
    const original = makeTracker();
    const cloned = cloneActionTracker(original);
    cloned.actions[1] = false;
    expect(original.actions[1]).toBe(true);
  });
});

describe("combineActionTrackers", () => {
  it("updates an existing tracker by id", () => {
    const trackers = [makeTracker({ id: "1", name: "A" })];
    const updated = makeTracker({ id: "1", name: "B" });
    const result = combineActionTrackers(trackers, updated);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("B");
  });

  it("appends a new tracker when id is not found", () => {
    const trackers = [makeTracker({ id: "1" })];
    const newTracker = makeTracker({ id: "2", name: "New" });
    const result = combineActionTrackers(trackers, newTracker);
    expect(result).toHaveLength(2);
  });
});
