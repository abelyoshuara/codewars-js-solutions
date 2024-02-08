function strCount(str, letter) {
  return str.split("").filter((s) => s === letter).length;
}

console.log(strCount("Hello", "o")); // 1
console.log(strCount("Hello", "l")); // 2
console.log(strCount("", "z")); // 0
