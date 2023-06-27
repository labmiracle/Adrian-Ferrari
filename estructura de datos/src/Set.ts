export function areThereDuplicates<T>(array: T[]) {
  return array.length !== new Set(array).size;
}

export function concatUniques<T>(...array: T[][]) {
  const set = new Set(array.flat());
  return [...set];
}
