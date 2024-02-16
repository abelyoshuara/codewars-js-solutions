/* eslint-disable no-restricted-syntax */
function sumArray(array) {
  if (!array) return 0;
  if (array.length < 3) return 0;

  //   let highest = Math.max(...array);
  //   let lowest = Math.min(...array);
  //   let sum = 0;

  //   for (const a of array) {
  //     if (highest === a) {
  //       sum += 0;
  //       highest = 0;
  //     } else if (lowest === a) {
  //       sum += 0;
  //       lowest = 0;
  //     } else {
  //       sum += a;
  //     }
  //   }

  //   return sum;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray(null), 0);
console.log(sumArray([]), 0);
console.log(sumArray([3]), 0);
console.log(sumArray([3, 5]), 0);
console.log(sumArray([6, 2, 1, 8, 10]), 16);
console.log(sumArray([0, 1, 6, 10, 10]), 17);
console.log(sumArray([-6, -20, -1, -10, -12]), -28);
console.log(sumArray([-6, 20, -1, 10, -12]), 3);
