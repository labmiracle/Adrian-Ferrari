import { someMan, someBlueEyes, someHigherThan200, someMassLessThan50 } from "../ej-1";
import { characters } from "../arreglos";

test("someMan() => ¿Hay al menos un personaje masculino?", () => {
    expect(someMan(characters)).toBe(true);
});
test("someBlueEyes() => ¿Hay al menos un personaje con ojos azules?", () => {
    expect(someBlueEyes(characters)).toBe(true);
});
test("someHigherThan200() => ¿Hay al menos un personaje más alto que 200?", () => {
    expect(someHigherThan200(characters)).toBe(true);
});
test("someMassLessThan50() => ¿Hay al menos un personaje que tenga una masa inferior a 50?", () => {
    expect(someMassLessThan50(characters)).toBe(true);
});
