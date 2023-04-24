function combineTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

const arr1 = combineTwoArrays(["Hola", 3, 45], ["mundo", 67]);
const arr2 = ["Hola", 3, 45, "mundo", 67];
console.assert(
  arr1.length === arr2.length && arr1.every((item) => arr2.includes(item)) && arr2.every((item) => arr1.includes(item))
);
