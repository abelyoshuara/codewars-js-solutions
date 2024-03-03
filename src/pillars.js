function pillars(numPill, dist, width) {
  if (numPill === 1) return 0;
  return dist * (numPill - 1) * 100 + width * (numPill - 2);
}

console.log(pillars(1, 10, 10), 0);
console.log(pillars(2, 20, 25), 2000);
console.log(pillars(11, 15, 30), 15270);
