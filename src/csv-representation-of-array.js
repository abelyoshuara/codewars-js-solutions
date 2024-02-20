function toCsvText(array) {
  return array.map((arr) => arr.join(",")).join("\n");
}

console.log(
  toCsvText([
    [5, 55, 5, 5, 55],
    [6, 6, 66, 23, 24],
    [666, 31, 66, 33, 7],
  ]),
);
