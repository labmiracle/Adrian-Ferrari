/* eslint-disable prefer-const */
let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

capitalize = function (value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};

multiply = function (x: number, y: number): number {
    return x * y;
};

export { capitalize, multiply };
