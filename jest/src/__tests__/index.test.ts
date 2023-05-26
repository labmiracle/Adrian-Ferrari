import { fizzBuzz } from "../ej-11";
import { bisiesto } from "../ej-12";
import { cadenaADN } from "../ej-13";
import { sumaArr } from "../ej-14";
import { repeatCharIndexFinder } from "../ej-15";
import { findMaxConsecutiveOnes } from "../ej-16";
import { lookup } from "../ej-17";
import { addToCart, setPrice, Item } from "../ej-18";

test("ejercicio 1.1", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(15)).toMatch(/FizzBuzz/);
    expect(fizzBuzz(0)).toBe(0);
    // @ts-expect-error probando un tipo de argumento erroneo
    expect(() => fizzBuzz("string")).toThrow(/Argument must be a number/);
});

test("ejercicio 1.2: prueba si un año es bisiesto", () => {
    expect(bisiesto(new Date("1900"))).toBeFalsy();
    expect(bisiesto(new Date("2000"))).toBeTruthy();
    //Date(0) should translate to year 1970
    expect(bisiesto(new Date(0))).toBeFalsy();
    expect(() => bisiesto(new Date("year"))).toThrow(/Argument must be a year/);
});

describe("ejercicio 1.3: devuelve cadena de ADN con valores canonicos unicamente(ACTG)", () => {
    expect(cadenaADN("12AaaCTgG")).toBe("ACTG");
    expect(cadenaADN("12ZzH")).toBe("");
    // @ts-expect-error probando un tipo de argumento erroneo
    expect(() => cadenaADN(0)).toThrow(/Argument must be a string/);
});

test("ejercicio 1.4: trata de sumar todos los numeros y cadenas de numberos positivos de un arreglo", () => {
    expect(sumaArr(["A", 2, 3, true, false, "$$", "5", -4])).toBe(10);
    expect(sumaArr([])).toBe(0);
});

test("ejercicio 1.5: encuentra el indice del primer char repetido", () => {
    expect(repeatCharIndexFinder("  PruebBa")).toBe(6);
    expect(repeatCharIndexFinder("Prueba")).toBe(-1);
});

describe("ejercicio 1.6: encuentra el numero maximo de 1s consecutivos", () => {
    it("should convert strings to numbers", () => {
        expect(
            findMaxConsecutiveOnes([
                [1, 0, 1, 0],
                [1, 1, 1, 0],
                [1, 1, 0, 0],
                ["1", 1, 0, 1],
            ])
        ).toBe(9);
        expect(
            findMaxConsecutiveOnes([
                [1, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 1],
                [1, 0, 0, 1, 0, 1],
            ])
        ).toBe(8);
    });
    it("should return -1 if any element of the matrix is neither 1 or 0", () => {
        expect(
            findMaxConsecutiveOnes([
                [1, 0],
                [2, 1],
            ])
        ).toBe(-1);
        expect(
            findMaxConsecutiveOnes([
                ["A", 0],
                [0, 1],
            ])
        ).toBe(-1);
        expect(
            findMaxConsecutiveOnes([
                [1, 10],
                [0, 1],
            ])
        ).toBe(-1);
    });
});

describe("ejercicio 1.7: lookup()", () => {
    it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
        const actual = lookup("norvig", "likes");
        const expected = ["AI", "Search", "NASA", "Mars"];

        expect(actual).toEqual(expected);
    });
    it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
        const actual = lookup("knuth", "lastName");
        const expected = "Knuth";

        expect(actual).toEqual(expected);
    });
    it("with unknown user should throw an error with the correct message", () => {
        expect(() => {
            lookup("nobody", "likes");
        }).toThrow(/Could not find user/);
    });
    it("with unknown property should throw an error the correct message", () => {
        expect(() => {
            lookup("mfowler", "noprop");
        }).toThrow(/Could not find property/);
    });
});

describe("ejercicio 1.8", () => {
    it("setPrice() should set the price in the given item object, immutably.", () => {
        const item: Item = {
            name: "test",
            price: 30,
        };
        const copy = Object.assign({}, item);

        const actual = setPrice(item, 50);
        const expected: Item = {
            name: "test",
            price: 50,
        };

        expect(actual).toEqual(expected);
        expect(item).toEqual(copy);
    });
    it("addToCart() should add item to cart, immutably", () => {
        const originalCart: Item[] = [];
        const item: Item = {
            name: "Toy",
            price: 30,
        };
        const copy = originalCart.slice();

        const actual = addToCart(originalCart, item);
        const expected = [item];

        expect(actual).toEqual(expected);
        expect(originalCart).toEqual(copy);
    });
});
