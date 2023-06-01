function customMap<T>(array: T[], callback: (elem: T, index: number, arr: T[]) => T): T[] {
    const result: T[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

function customFind<T>(array: T[], callback: (elem: T, index: number, arr: T[]) => boolean): T | string {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) return array[i];
    }
    return "undefined";
}

function customFilter<T>(array: T[], callback: (elem: T, index: number, arr: T[]) => boolean) {
    const result: T[] = [];
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array) && result.push(array[i]);
    }
    return result;
}

function customReduce<T>(array: T[], callback: (accumulator: T, current: T, index: number, arr: T[]) => T, initialValue?: T | undefined) {
    const arrCopy = [...array];
    let acc: T;
    if (array.length < 1) return "undefined";
    if (initialValue) {
        acc = initialValue;
    } else if (array.length > 1) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        acc = arrCopy.shift()!;
    } else throw new Error("Provide an initial value or an array with 2 or more elements");
    for (let i = 0; i < arrCopy.length; i++) {
        acc = callback(acc, arrCopy[i], i, array);
    }
    return acc;
}

export { customMap, customFind, customFilter, customReduce };
