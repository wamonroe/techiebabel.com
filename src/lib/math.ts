const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sum = (numbers: number[]) => {
  return numbers.reduce((acc, cur) => acc + cur);
};

export { random, sum };
