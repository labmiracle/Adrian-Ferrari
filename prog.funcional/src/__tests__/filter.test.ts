import { massOver100, heightLess200, males, females } from "../ej-1";
import { characters } from "../arreglos";

test("massOver100() devuelve los personajes con masa superior a 100", () => {
    expect(massOver100(characters)).toEqual([
        {
            name: "Darth Vader",
            height: "202",
            mass: "136",
            eye_color: "yellow",
            gender: "male",
        },
    ]);
});

test("hegthLess200 devuelve los personajes con una altura inferior a 200", () => {
    expect(heightLess200(characters)).toMatchObject([
        {
            name: "Luke Skywalker",
            height: "172",
        },
        {
            name: "Leia Organa",
            height: "150",
        },
        {
            name: "Anakin Skywalker",
            height: "188",
        },
    ]);
});

test("males() devuelve todos los personajes masculinos", () => {
    expect(males(characters)).toMatchObject([
        {
            name: "Luke Skywalker",
            gender: "male",
        },
        {
            name: "Darth Vader",
            gender: "male",
        },
        {
            name: "Anakin Skywalker",
            gender: "male",
        },
    ]);
});

test("females() devuelve todos los personajes femeninos", () => {
    expect(females(characters)).toMatchObject([
        {
            name: "Leia Organa",
            gender: "female",
        },
    ]);
});
