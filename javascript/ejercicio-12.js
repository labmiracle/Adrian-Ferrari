const prompt = require("prompt-sync")({ sigint: true });

function adivinar() {
  const numeroSecreto = Math.floor(Math.random() * 9 + 1);
  let numero;
  console.log('Escriba "exit" para salir del juego');
  do {
    numero = prompt("Adivine un numero del 1-10? ");
    if (numero === "exit") return;
    if (isNaN(Number(numero))) {
      console.log("Error: Ingrese un numero");
    } else if (numero < 1 || numero > 10) {
      console.log("Error: Ingrese un numero dentro del rango descripto");
    } else {
      if (numero < numeroSecreto) console.log("El numero es mayor");
      if (numero > numeroSecreto) console.log("El numero es menor");
    }
  } while (numero != numeroSecreto);
  return console.log("Correcto!");
}

adivinar();
