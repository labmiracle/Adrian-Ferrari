type T = number | string;

function add(x: T, y: T): number {
    x = isNaN(+x) ? 0 : +x;
    y = isNaN(+y) ? 0 : +y;

    return x + y;
}

function sumArray(numbers: T[]): number {
    if (numbers.length === 0) return 0;

    const initialValue = isNaN(+numbers[0]) ? 0 : +numbers[0];
    return numbers.slice(1).reduce(add, initialValue) as number;
}

export default sumArray;
