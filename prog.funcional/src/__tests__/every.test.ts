import { areAllEyesBlue, areAllOver40Mass, areAllShorterThan200, areAllMen } from "../ej-1";
import { characters } from "../arreglos";

test("areAllEyesBlue() => ¿Todos los personajes tienen ojos azules?", () => {
    expect(areAllEyesBlue(characters)).toBe(false);
});
test("areAllOver40Mass() => ¿Todos los personajes tienen una masa superior a 40?", () => {
    expect(areAllOver40Mass(characters)).toBe(true);
});
test("areAllShorterThan200() => ¿Todos los caracteres son más bajos que 200?", () => {
    expect(areAllShorterThan200(characters)).toBe(false);
});
test("areAllMen() => ¿Todos los personajes son hombres?", () => {
    expect(areAllMen(characters)).toBe(false);
});
