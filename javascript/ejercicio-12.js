const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function adivinar() {
  const numeroSecreto = Math.floor(Math.random() * 9 + 1);
  let numero;
  console.log('Escriba "exit" para salir del juego');
  do {
    numero = await new Promise((resolve) => {
      readline.question("Adivine un numero del 1-10? ", resolve);
    });

    if (numero === "exit") {
      return;
    }
    if (isNaN(Number(numero))) {
      console.log("Error: Ingrese un numero");
    } else if (numero < 1 || numero > 10) {
      console.log("Error: Ingrese un numero dentro del rango descripto");
    } else {
      if (numero < numeroSecreto) console.log("El numero es mayor");
      if (numero > numeroSecreto) console.log("El numero es menor");
    }
  } while (numero != numeroSecreto);
  readline.close();
  return console.log("Correcto!");
}

adivinar();
