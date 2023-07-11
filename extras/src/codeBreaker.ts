/* 
1. Vamos a implementar el juego de Code Breaker. El juego comienza generando un número
al azar de cuatro dígitos. Cada dígito puede tener un valor entre 0 y 6.
2. El usuario ingresa un número intentando adivina el número secreto
3. Si alguno de los números concuerda en la posición original, se muestra una X
4. Si alguno de los números no concuerda con la posición original, pero esta en el número
secreto en otra posición, muestra un -
5. El orden en que se muestran es el siguiente: XX- (primero las X y luego los -) 
*/

// eslint-disable-next-line @typescript-eslint/no-var-requires
/* const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
}); */

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export function codeBreaker(numeroSecreto: string[], numeroAdivinado: string) {
    const numeroArr = numeroAdivinado.split("");
    let result = "";

    for (let i = 0; i < numeroArr.length; i++) {
        if (numeroSecreto.includes(numeroArr[i])) {
            if (numeroArr[i] === numeroSecreto[i]) {
                result = "X" + result;
            } else {
                result = result + "-";
            }
        }
    }
    return result;
}

async function codeBreakerGame() {
    const readLine = readline.createInterface({
        input,
        output,
    });
    const random = () => Math.floor(Math.random() * 6).toString();
    const codigoSecreto: string[] = [...Array(4)].map(random);
    let numero: string;
    let result = "";

    console.log("codigo secreto: ", codigoSecreto);
    console.log('Escriba "exit" para salir del juego');
    do {
        numero = await readLine.question("Adivine un numero de 4 cifras cuyos digitos se encuentan entre 0 y 6? ");

        if (numero === "exit") {
            return;
        }
        if (isNaN(Number(numero))) {
            console.log("Error: Ingrese un numero");
        } else if (numero.length !== 4) {
            console.log("Error: Ingrese un numero de 4 cifras");
        } else {
            result = codeBreaker(codigoSecreto, numero);
            console.log("Salida: " + result);
        }
    } while (result != "XXXX");
    readLine.close();
    return console.log("Correcto!");
}

export default codeBreakerGame;
