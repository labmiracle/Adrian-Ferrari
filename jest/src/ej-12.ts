export function bisiesto(date: Date): boolean {
    const year = date.getUTCFullYear();
    if (isNaN(year)) throw new Error("Argument must be a year");
    return year % 4 === 0 && (year % 100 != 0 || year % 400 === 0);
}
