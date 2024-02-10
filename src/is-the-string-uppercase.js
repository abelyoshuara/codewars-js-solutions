// eslint-disable-next-line no-extend-native, func-names
String.prototype.isUpperCase = function () {
  return this.toString() === this.toUpperCase();
};

console.log("c".isUpperCase()); // false
console.log("C".isUpperCase()); // true
