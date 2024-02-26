function countPositivesSumNegatives(input) {
  if (input === null || input.filter((n) => n !== 0).length === 0) return [];

  const pos = Array.isArray(input) ? input.filter((n) => n > 0) : [];
  const neg = Array.isArray(input)
    ? input.filter((n) => n < 0).reduce((acc, curr) => acc + curr, 0)
    : null;

  return [pos.length, neg];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ]),
);

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ]),
);

console.log(countPositivesSumNegatives([]));
