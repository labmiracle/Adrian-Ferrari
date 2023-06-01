import { customMap, customFind, customFilter, customReduce } from "../ej-extras";

const arr1 = [2, 3, 4, 5, 6];
const arr2 = ["lunes", "martes", "miercoles", "jueves"];

test("customMap() se comporta como map()", () => {
    expect(customMap(arr1, num => num * 2)).toEqual([4, 6, 8, 10, 12]);
    expect(customMap(arr1, (num, i, arr) => arr[arr.length - i - 1])).toEqual([6, 5, 4, 3, 2]);
    expect(customMap(arr2, str => str.toUpperCase())).toEqual(["LUNES", "MARTES", "MIERCOLES", "JUEVES"]);
});
test("customFind() se comporta como find()", () => {
    expect(customFind(arr1, num => num > 4)).toEqual(5);
    expect(customFind(arr2, str => str.length > 6)).toEqual("miercoles");
    expect(customFind(arr2, str => str === "viernes")).toBe("undefined");
});
test("customFilter() se comporta como filter()", () => {
    expect(customFilter(arr1, num => num > 4)).toEqual([5, 6]);
    expect(customFilter(arr2, str => str.slice(0, 1) === "m")).toEqual(["martes", "miercoles"]);
    expect(customFilter([], num => num > 4)).toEqual([]);
});
test("customReduce() se comporta como reduce()", () => {
    expect(customReduce(arr1, (acc, curr) => acc + curr)).toBe(20);
    expect(customReduce(arr2, (acc, curr, i) => (i < 2 ? acc + " " + curr : acc), "domingo")).toBe("domingo lunes martes");
    expect(customReduce<number>([], (acc, curr) => acc + curr, 2)).toBe("undefined");
    expect(() => customReduce<number>([1], (acc, curr) => acc + curr)).toThrow(/Provide an initial value or an array with 2 or more elements/);
});
