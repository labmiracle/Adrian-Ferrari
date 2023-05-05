import padLeft from "./ejercicios/ej22.js";
import flatten from "./ejercicios/ej23.js";
import interrogateAnimal from "./ejercicios/ej24.js";
import sumArray from "./ejercicios/ej31.js";
import bankAccount from "./ejercicios/ej32.js";
import computeScore from "./ejercicios/ej33.js";
import greet from "./ejercicios/ej34.js";
import { comparaArrays } from "./utils.js";

//Ejercicio 2.2

console.log(
    "[Ejercicio 2.2]",
    `
${padLeft("hola", 0)},
${padLeft("hola", 3)},
${padLeft("hola", "mundo")}
`
);

//Ejercicio 2.3

const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
const words = ["ab", "cd", ["ef", "jk"], "lm"];
const flattenedWords = ["ab", "cd", "ef", "jk", "lm"];

console.log("[Ejercicio 2.3]", flatten(numbers));

console.assert(
    comparaArrays(flatten(words), flattenedWords),
    "Ejercicio 2.3: test 2"
);

//Ejercicio 2.4

console.log(
    "[Ejercicio 2.4]",
    `Tenemos un ${interrogateAnimal()} en nuestras manos!`
);

//Ejercicio 3.1

const someSum1 = sumArray(["3", "6", "9"]);
const someSum2 = sumArray(["3", 6, "9"]);
const someSum3 = sumArray(["3", 6, "9", "test"]);

console.log("[Ejercicio 3.1]", `3 + 6 + 9 === ${someSum1}`);

console.assert(someSum2 === 18, "Ejercicio 3.1: test 2");
console.assert(someSum3 === 18, "Ejercicio 3.1: test 3");

//Ejercicio 3.2

bankAccount.deposit(20);
bankAccount.deposit(10, "Deposit received");

console.log("[Ejercicio 3.2]", `Account value: $${bankAccount.money}`);

//Ejercicio 3.3

console.log("[Ejercicio 3.3]", `zoologico vale ${computeScore("zoo")} puntos.`);

//Ejercicio 3.4

const defaultGreeting = greet();
const portugueseGreeting = greet("Oi como vai!");

console.log("[Ejercicio 3.4]", defaultGreeting, portugueseGreeting);
