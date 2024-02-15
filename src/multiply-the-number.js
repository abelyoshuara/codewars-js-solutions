function multiply(number) {
  return number * 5 ** Math.abs(number).toString().split("").length;
}

console.log(multiply(3));
console.log(multiply(10));
console.log(multiply(200));
console.log(multiply(0));
console.log(multiply(-3));
