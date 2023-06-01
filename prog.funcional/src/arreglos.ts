import { Personaje } from "./ej-1";
import { user } from "./ej-2";

export const characters: Personaje[] = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        eye_color: "blue",
        gender: "male",
    },
    {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        eye_color: "yellow",
        gender: "male",
    },
    {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        eye_color: "brown",
        gender: "female",
    },
    {
        name: "Anakin Skywalker",
        height: "188",
        mass: "84",
        eye_color: "blue",
        gender: "male",
    },
];

export const users: user[] = [
    { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
    { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
    { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
    { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
    { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
    { firstName: "Wes", lastName: "Reid", role: "Instructor" },
    { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];
