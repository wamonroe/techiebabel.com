import { random, sum } from "./math";

describe("random", () => {
  it("returns a number within the specified range", () => {
    for (let i = 0; i < 100; i++) {
      const result = random(1, 6);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(6);
    }
  });

  it("returns an integer", () => {
    const result = random(1, 20);
    expect(Number.isInteger(result)).toBe(true);
  });
});

describe("sum", () => {
  it("sums an array of numbers", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  it("handles a single element", () => {
    expect(sum([5])).toBe(5);
  });
});
