import padLeft from "./ejercicios/ej22.js";
import flatten from "./ejercicios/ej23.js";
import interrogateAnimal from "./ejercicios/ej24.js";
import sumArray from "./ejercicios/ej31.js";
import { comparaArrays } from "./utils.js";

//Ejercicio 2.2

console.assert(padLeft("hola", 0) === "hola", "Ejercicio 2.2: test 1");
console.assert(padLeft("hola", 3) === "   hola", "Ejercicio 2.2: test 2");
console.assert(
    padLeft("hola", "mundo") === "mundohola",
    "Ejercicio 2.2: test 3"
);

//Ejercicio 2.3

const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
const flattenedNumbers = [1, 2, 3, 44, 55, 6, 77, 88, 9, 10];
const words = ["ab", "cd", ["ef", "jk"], "lm"];
const flattenedWords = ["ab", "cd", "ef", "jk", "lm"];

console.assert(
    comparaArrays(flatten(numbers), flattenedNumbers),
    "Ejercicio 2.3: test 1"
);

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

console.assert(someSum1 === 18, "Ejercicio 3.1: test 1");
console.assert(someSum2 === 18, "Ejercicio 3.1: test 2");
console.assert(someSum3 === 18, "Ejercicio 3.1: test 3");

//Ejercicio 3.2
