export function sumaArr(arr: unknown[]): number {
    const filter = (item: unknown) => typeof item != "boolean" && (typeof item === "number" || "string") && +(item as number | string) > 0;
    const arrNum = arr.filter(filter) as (number | string)[];
    const suma = arrNum.reduce((acc: number, curr) => acc + +curr, 0);
    return suma as number;
}
