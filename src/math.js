export const randomInt = (min, max) =>
  Math.round((Math.random() * (max - min)) + min);

export const isEven = n => n % 2 === 0;

export const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export const max = xs => xs.reduce((a, b) => Math.max(a, b));
export const min = xs => xs.reduce((a, b) => Math.min(a, b));

export const arithmeticSeq = (first, length, diff) => {
  const iter = (acc, current, count) => {
    if (count >= length) {
      return acc;
    }

    return iter(acc.concat(current), current + diff, count + 1);
  };

  return iter([], first, 0);
};
