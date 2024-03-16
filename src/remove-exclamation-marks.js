function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((str) => str !== "!")
    .join("");
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");
