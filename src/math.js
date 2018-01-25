export const randomInt = (min, max) =>
  Math.round((Math.random() * (max - min)) + min);

export const isEven = n => n % 2 === 0;

export const gcd = (a, b) => {
  const iter = (big, small) => {
    if (small === 0) {
      return big;
    }

    return iter(small, big % small);
  };

  return iter(Math.max(a, b), Math.min(a, b));
};
