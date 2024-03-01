function yearDays(year) {
  /*
  let isLeapYear;
  if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
      isLeapYear = true;
    } else {
      isLeapYear = false;
    }
  } else {
    isLeapYear = false;
  }
  */
  const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  return `${year} has ${isLeapYear ? 366 : 365} days`;
}

console.log(yearDays(0) === "0 has 366 days");
console.log(yearDays(-64) === "-64 has 366 days");
console.log(yearDays(2016) === "2016 has 366 days");
console.log(yearDays(1974) === "1974 has 365 days");
console.log(yearDays(-10) === "-10 has 365 days");
console.log(yearDays(666) === "666 has 365 days");
console.log(yearDays(1857) === "1857 has 365 days");
