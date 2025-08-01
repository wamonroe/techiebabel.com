import { random, sum } from "./math";

type AttackRollOptions = {
  adv?: number;
  dis?: number;
};

type RollResult = {
  dice: string;
  rolls: number[];
  total: number;
};

type AttackRollResult = RollResult & {
  status: string;
  critRolls: number[];
  discardedRolls: number[];
};

// Core functions (export these)

const attackRoll = (dice: string, options: AttackRollOptions = {}): AttackRollResult => {
  const { count, sides } = parseDice(dice);
  const { hasAdv, hasDis, stacks } = parseAttackRollOptions(options);

  if (hasAdv) {
    return doAttackRollWithAdvantage(count, sides, stacks);
  } else if (hasDis) {
    return doAttackRollWithDisadvantage(count, sides, stacks);
  } else {
    return doAttackRoll(count, sides);
  }
};

const roll = (dice: string): RollResult => {
  const { count, sides } = parseDice(dice);
  const rolls = doRoll(count, sides);
  const total = sum(rolls);
  return { dice, rolls, total };
};

// Helper functions (internal use only)

const doAttackRoll = (count: number, sides: number) => {
  const rolls = doRoll(count, sides);
  return finalizeAttackRoll(count, sides, rolls);
};

const doAttackRollWithAdvantage = (count: number, sides: number, stacks: number) => {
  const allRolls = doRoll(count + stacks, sides);
  const { rolls, discardedRolls } = dropLowest(stacks, allRolls);
  return finalizeAttackRoll(count, sides, rolls, discardedRolls);
};

const doAttackRollWithDisadvantage = (count: number, sides: number, stacks: number) => {
  const allRolls = doRoll(count + stacks, sides);
  const { rolls, discardedRolls } = dropHighest(stacks, allRolls);
  return finalizeAttackRoll(count, sides, rolls, discardedRolls);
};

const doRoll = (count: number, sides: number) => {
  const rolls = Array.from({ length: count }, () => random(1, sides));
  return rolls;
};

const dropHighest = (count: number, rolls: number[]) => {
  const discardedRolls: number[] = [];

  Array.from({ length: count }, () => {
    const max = Math.max(...rolls);
    const maxIndex = rolls.indexOf(max);
    rolls.splice(maxIndex, 1);
    discardedRolls.push(max);
  });
  return { rolls, discardedRolls };
};

const dropLowest = (count: number, rolls: number[]) => {
  const discardedRolls: number[] = [];
  Array.from({ length: count }, () => {
    const min = Math.min(...rolls);
    const minIndex = rolls.indexOf(min);
    rolls.splice(minIndex, 1);
    discardedRolls.push(min);
  });
  return { rolls, discardedRolls };
};

const isCrit = (roll: number, sides: number) => roll == sides;
const isMiss = (roll: number) => roll == 1;

const parseAttackRollOptions = ({ adv = 0, dis = 0 }: AttackRollOptions) => {
  const hasAdv = adv > 0;
  const hasDis = dis > 0;
  const stacks = Math.abs(adv - dis);
  return { hasAdv, hasDis, stacks };
};

const parseDiceRegexp = /^(?<count>\d+)d(?<sides>\d+)?$/;

const parseDice = (dice: string) => {
  const result = dice.match(parseDiceRegexp)?.groups;
  if (!result) throw new Error("Invalid dice notation");

  const count = Number(result.count);
  const sides = Number(result.sides);
  return { count, sides };
};

const extraCritRolls = (sides: number): number[] => {
  const roll = random(1, sides);

  if (isCrit(roll, sides)) {
    return [roll, ...extraCritRolls(sides)];
  } else {
    return [roll];
  }
};

const finalizeAttackRoll = (
  count: number,
  sides: number,
  rolls: number[],
  discardedRolls: number[] = []
): AttackRollResult => {
  const dice = `${count}d${sides}`;
  const primaryRoll = rolls[0];

  if (isCrit(primaryRoll, sides)) {
    const critRolls = extraCritRolls(sides);
    return {
      dice,
      status: "Crit",
      rolls,
      critRolls,
      discardedRolls,
      total: sum([...rolls, ...critRolls])
    };
  } else if (isMiss(primaryRoll)) {
    return {
      dice,
      status: "Miss",
      rolls,
      critRolls: [],
      discardedRolls,
      total: 0
    };
  } else {
    return {
      dice,
      status: "Hit",
      rolls,
      critRolls: [],
      discardedRolls,
      total: sum(rolls)
    };
  }
};

export { attackRoll, roll };
export type { AttackRollOptions, AttackRollResult, RollResult };
