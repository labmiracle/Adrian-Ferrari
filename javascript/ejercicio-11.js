function onlyUniques(...args) {
  const set = new Set(args);
  return [...set];
}

console.log(onlyUniques("1", "1", 23, { a: 3, b: 2 }, "23", 23, { a: 3, b: 2 }));
