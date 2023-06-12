const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function adivinar() {
  const numeroSecreto = Math.floor(Math.random() * 9 + 1);
  let numero;
  let contadorIntentos;
  console.log('Escriba "exit" para salir del juego');

  //dificultad
  do {
    console.log("Dificultades:\n1 - Easy= 20 intentos\n2 - Medium = 10 intentos\n3 - Hard = 5 intentos");
    let intentos = await new Promise((resolve) => {
      readline.question("Elija la dificultad: ", resolve);
    });
    if (intentos === "1" || intentos === "Easy") {
      contadorIntentos = 20;
    } else if (intentos === "2" || intentos === "Medium") {
      contadorIntentos = 10;
    } else if (intentos === "3" || intentos === "Hard") {
      contadorIntentos = 5;
    } else if (intentos === "exit") {
      readline.close();
      return;
    } else {
      console.log("Escriba el numero o el nombre de la dificultad");
    }
  } while (contadorIntentos === undefined);

  //juego
  do {
    console.log("Intentos:", contadorIntentos);
    numero = await new Promise((resolve) => {
      readline.question("Adivine un numero del 1-10? ", resolve);
    });

    if (numero === "exit") {
      readline.close();
      return;
    }
    if (isNaN(Number(numero))) {
      console.log("Error: Ingrese un numero");
    } else if (numero < 1 || numero > 10) {
      console.log("Error: Ingrese un numero dentro del rango descripto");
    } else {
      if (numero < numeroSecreto) console.log("El numero es mayor");
      if (numero > numeroSecreto) console.log("El numero es menor");
      contadorIntentos--;
    }
  } while (numero != numeroSecreto);
  readline.close();
  return console.log("Correcto!");
}

adivinar();
