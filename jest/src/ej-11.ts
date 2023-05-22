export function fizzBuzz(num: number): string | number {
    if (typeof num != "number") throw new Error("Argument must be a number");
    if (num === 0) return num;
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
}
