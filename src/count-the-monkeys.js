function monkeyCount(n) {
  return [...Array(n)].map((_, index) => index + 1);
}

console.log(monkeyCount(5)); // [1, 2, 3, 4, 5]
console.log(monkeyCount(3)); // [1, 2, 3]
