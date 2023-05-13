import padLeft from "./ejercicios/ej22.js";
import flatten from "./ejercicios/ej23.js";
import interrogateAnimal from "./ejercicios/ej24.js";
import sumArray from "./ejercicios/ej31.js";
import bankAccount from "./ejercicios/ej32.js";
import computeScore from "./ejercicios/ej33.js";
import greet from "./ejercicios/ej34.js";
import layEggs from "./ejercicios/ej35.js";
import { capitalize, multiply } from "./ejercicios/ej36.js";
import pushToCollection from "./ejercicios/ej37.js";
import { comparaArrays } from "./utils.js";

//Ejercicio 2.1

//Ejercicio 2.2

console.assert(`${padLeft("hola", 0)}` === "hola", "Ejercicio 2.2: test 1");
console.assert(`${padLeft("hola", 3)}` === "   hola", "Ejercicio 2.2: test 2");
console.assert(
    `${padLeft("hola", "mundo")}` === "mundohola",
    "Ejercicio 2.2: test 3"
);

//Ejercicio 2.3

const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
const flattedenNumbers = [1, 2, 3, 44, 55, 6, 77, 88, 9, 10];
const words = ["ab", "cd", ["ef", "jk"], "lm"];
const flattenedWords = ["ab", "cd", "ef", "jk", "lm"];

console.assert(
    comparaArrays(flatten(numbers), flattedenNumbers),
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

bankAccount.deposit(20);
const message = bankAccount.deposit(10, "Deposit received");

console.assert(message === "Deposit received", "Ejercicio 3.2: test 1");
console.assert(bankAccount.money === 30, "Ejercicio 3.2: test 2");

//Ejercicio 3.3

console.assert(computeScore("zoo") === 12, "Ejercicio 3.3: test 1");

//Ejercicio 3.4

const defaultGreeting = greet();
const portugueseGreeting = greet("Oi como vai!");
console.assert(defaultGreeting === "HOLA", "Ejercicio 3.4: test 1");
console.assert(portugueseGreeting === "OI COMO VAI!", "Ejercicio 3.4: test 2");

//Ejercicio 3.5

console.assert(
    layEggs() === "Acabas de poner 0 huevos . Buen trabajo!",
    "Ejercicio 3.5: test 1"
);
console.assert(
    layEggs(5, "azules") === "Acabas de poner 5 huevos azules. Buen trabajo!",
    "Ejercicio 3.5: test 2"
);

//Ejercicio 3.6

console.assert(
    capitalize(`habil ${multiply(5, 10)}`) === "Habil 50",
    "Ejercicio 3.6: test 1"
);

//Ejercicio 3.7

const numberCollection: number[] = [];
const stringCollection: string[] = [];

pushToCollection("false", stringCollection);
pushToCollection("hi", stringCollection);
pushToCollection("[]", stringCollection);

pushToCollection(1, numberCollection);
pushToCollection(2, numberCollection);
pushToCollection(3, numberCollection);

const incrementedByTwo = numberCollection.map(num => num + 2);

console.assert(
    comparaArrays(incrementedByTwo, [3, 4, 5]),
    "Ejercicio 3.7: test 1"
);
console.assert(
    comparaArrays(stringCollection, ["false", "hi", "[]"]),
    "Ejercicio 3.7: test 2"
);
