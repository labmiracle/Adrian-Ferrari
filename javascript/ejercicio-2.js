function sum(arr, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i]) {
      sum += arr[i];
    }
  }
  return sum;
}

const array = [2, 2, 2, 2, 2, 2];

console.log(sum(array, 0));
console.log(sum(array, 2));
console.log(sum(array, 4));
console.log(sum(array, 8));
