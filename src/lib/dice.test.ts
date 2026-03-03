import { attackRoll, roll } from "./dice";

describe("roll", () => {
  it("returns a result with the correct dice notation", () => {
    const result = roll("2d6");
    expect(result.dice).toBe("2d6");
  });

  it("returns the correct number of individual rolls", () => {
    const result = roll("3d8");
    expect(result.rolls).toHaveLength(3);
  });

  it("returns rolls within valid range", () => {
    const result = roll("1d20");
    expect(result.rolls[0]).toBeGreaterThanOrEqual(1);
    expect(result.rolls[0]).toBeLessThanOrEqual(20);
  });

  it("returns a total that equals the sum of rolls", () => {
    const result = roll("2d6");
    const expectedTotal = result.rolls.reduce((a, b) => a + b, 0);
    expect(result.total).toBe(expectedTotal);
  });

  it("throws on invalid dice notation", () => {
    expect(() => roll("invalid")).toThrow("Invalid dice notation");
  });
});

describe("attackRoll", () => {
  it("returns a result with dice, rolls, total, and status", () => {
    const result = attackRoll("1d20");
    expect(result.dice).toBe("1d20");
    expect(result.rolls).toHaveLength(1);
    expect(["Hit", "Miss", "Crit"]).toContain(result.status);
    expect(typeof result.total).toBe("number");
  });

  it("returns a Miss with total 0 when rolling a 1", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const result = attackRoll("1d20");
    expect(result.status).toBe("Miss");
    expect(result.total).toBe(0);
    vi.restoreAllMocks();
  });

  it("returns extra rolls with advantage", () => {
    const result = attackRoll("1d20", { adv: 1 });
    expect(result.rolls).toHaveLength(1);
    expect(result.discardedRolls).toHaveLength(1);
  });

  it("returns extra rolls with disadvantage", () => {
    const result = attackRoll("1d20", { dis: 1 });
    expect(result.rolls).toHaveLength(1);
    expect(result.discardedRolls).toHaveLength(1);
  });
});
