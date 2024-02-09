const flickSwitch = (arr) => {
  let result = true;
  return arr.map((a) => {
    if (a === "flick") result = !result;
    return result;
  });
};

console.log(flickSwitch(["codewars", "flick", "code", "wars"])); // [true, false, false, false]
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]));
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));
