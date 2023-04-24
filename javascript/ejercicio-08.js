function sum(...args) {
  if (args.some(isNaN)) throw new Error("Los parametros tiene que ser numeros");
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

console.assert(sum(2, 3, 4, 5, 6, 7) === 27);
