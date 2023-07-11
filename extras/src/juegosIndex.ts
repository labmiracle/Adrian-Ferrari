import juegoCarta from "./juegoCarta";
import codeBreaker from "./codeBreaker";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function indexGames() {
    const readLine = readline.createInterface({
        input,
        output,
    });
    let respuesta: string;

    do {
        console.log("Elija un juego:\n1 - Cartas\n2 - Code Breaker");
        respuesta = await readLine.question("Juego ");
        const regCartas = /(1|Cartas)/i;
        const regCodeBreaker = /(2|Code Breaker)/i;
        if (regCartas.test(respuesta)) {
            const jugadores: string = await readLine.question("Elija el numero de jugadores ");
            const result = juegoCarta(+jugadores);
            console.log(result);
            respuesta = "exit";
        } else if (regCodeBreaker.test(respuesta)) {
            readLine.close();
            codeBreaker();
            respuesta = "exit";
        } else {
            console.log("Opcion no valida");
        }
    } while (respuesta !== "exit");
    readLine.close();
}
indexGames();
