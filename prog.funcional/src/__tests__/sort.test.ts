import { sortByName, sortByMass, sortByHeight, sortByGender } from "../ej-1";
import { characters } from "../arreglos";

test("sortByName() ordena por nombre", () => {
    expect(sortByName(characters)).toMatchObject([
        {
            name: "Anakin Skywalker",
        },
        {
            name: "Darth Vader",
        },
        {
            name: "Leia Organa",
        },
        {
            name: "Luke Skywalker",
        },
    ]);
});

test("sortByMass() ordena por masa", () => {
    expect(sortByMass(characters)).toMatchObject([
        {
            name: "Darth Vader",
            mass: "136",
        },
        {
            name: "Anakin Skywalker",
            mass: "84",
        },
        {
            name: "Luke Skywalker",
            mass: "77",
        },
        {
            name: "Leia Organa",
            mass: "49",
        },
    ]);
});

test("sortByHeight() ordena por altura", () => {
    expect(sortByHeight(characters)).toMatchObject([
        {
            name: "Darth Vader",
            height: "202",
        },
        {
            name: "Anakin Skywalker",
            height: "188",
        },
        {
            name: "Luke Skywalker",
            height: "172",
        },
        {
            name: "Leia Organa",
            height: "150",
        },
    ]);
});

test("sortByGender() ordena por genero", () => {
    expect(sortByGender(characters)).toMatchObject([
        {
            gender: "male",
        },
        {
            gender: "male",
        },
        {
            gender: "male",
        },
        {
            gender: "female",
        },
    ]);
});
