import { nombres, alturas, nombresAlturas } from "../ej-1";
import { characters } from "../arreglos";

test("nombres() devuelve un arreglo de todos los nombres del objeto characters", () => {
    expect(nombres(characters)).toEqual(["Luke Skywalker", "Darth Vader", "Leia Organa", "Anakin Skywalker"]);
});
test("alturas() devuelve un arreglo de todas las alturas", () => {
    expect(alturas(characters)).toEqual(["172", "202", "150", "188"]);
});
test("nombresAlturas() devuelve un arreglo de objetos con las propiedades de nombre y altura", () => {
    expect(nombresAlturas(characters)).toEqual([
        { name: "Luke Skywalker", height: "172" },
        { name: "Darth Vader", height: "202" },
        { name: "Leia Organa", height: "150" },
        { name: "Anakin Skywalker", height: "188" },
    ]);
});
