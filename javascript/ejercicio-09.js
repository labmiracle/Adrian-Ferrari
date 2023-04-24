function addOnlyNums(...args) {
  let total = 0;
  for (const arg of args) {
    if (typeof arg === "number") {
      total += arg;
    }
  }
  return total;
}

console.assert(addOnlyNums(2, "a", 3, "3", 4, 5, 6, 7) === 27);
