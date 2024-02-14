function powersOfTwo(n) {
  return [...Array(n + 1).fill(null)].map((_, index) => 2 ** index);
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(4));
