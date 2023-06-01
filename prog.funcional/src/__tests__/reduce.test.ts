import { masaTotal, alturaTotal, charsNamesArr, coloresOjos } from "../ej-1";
import { characters } from "../arreglos";

test("masaTotal() devuelve la masa total de todos los personajes", () => {
    expect(masaTotal(characters)).toBe(346);
});
test("alturaTotal() devuelve la altura total de todos los caracteres", () => {
    expect(alturaTotal(characters)).toBe(712);
});
test("charsNamesArr() devuelve el número total de caracteres en todos los nombres de los personajes", () => {
    expect(charsNamesArr(characters)).toEqual([
        { name: "Luke Skywalker", numchars: 13 },
        { name: "Darth Vader", numchars: 10 },
        { name: "Leia Organa", numchars: 10 },
        { name: "Anakin Skywalker", numchars: 15 },
    ]);
});
test("coloresOjos() devuelve el número total de caracteres por color de ojos", () => {
    expect(coloresOjos(characters)).toEqual({ blue: 2, yellow: 1, brown: 1 });
});
