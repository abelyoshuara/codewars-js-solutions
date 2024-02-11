function cubeChecker(volume, side) {
  return side > 0 ? volume === side ** 3 : false;
}

console.log(cubeChecker(8, 3), false);
console.log(cubeChecker(8, 2), true);
console.log(cubeChecker(-8, -2), false);
console.log(cubeChecker(0, 0), false);
console.log(cubeChecker(1, 5), false);
console.log(cubeChecker(125, 5), true);
