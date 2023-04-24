function onlyUniques(...args) {
  const set = new Set(args);
  return [...set];
}

const arr1 = onlyUniques("1", "1", 23, "23", 23);
const arr2 = ["1", 23, "23"];
console.assert(
  arr1.length === arr2.length && arr1.every((item) => arr2.includes(item)) && arr2.every((item) => arr1.includes(item))
);
