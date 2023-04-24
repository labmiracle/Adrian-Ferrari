function sum(arr, n) {
  if (n <= 0) return 0;
  const suma = (arr[n - 1] ? arr[n - 1] : 0) + sum(arr, n - 1);
  return suma;
}

const array = [2, 2, 2, 2, 2, 2];

console.assert(sum(array, 0) === 0);
console.assert(sum(array, 2) === 4);
console.assert(sum(array, 4) === 8);
console.assert(sum(array, 8) === 12);
