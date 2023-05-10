/* 
1. Vamos a implementar el juego de Code Breaker. El juego comienza generando un número
al azar de cuatro dígitos. Cada dígito puede tener un valor entre 0 y 6.
2. El usuario ingresa un número intentando adivina el número secreto
3. Si alguno de los números concuerda en la posición original, se muestra una X
4. Si alguno de los números no concuerda con la posición original, pero esta en el número
secreto en otra posición, muestra un -
5. El orden en que se muestran es el siguiente: XX- (primero las X y luego los -) 
*/

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function codeBreaker() {
  const random = () => Math.floor(Math.random() * 6).toString();
  const numeroSecreto = [...Array(4)].map(random);
  console.log("codigo secreto: ", numeroSecreto);
  let numero;
  console.log('Escriba "exit" para salir del juego');
  do {
    let result = "";
    numero = await new Promise((resolve) => {
      readline.question("Adivine un numero de 4 cifras cuyos digitos se encuentan entre 0 y 6? ", resolve);
    });
    if (numero === "exit") {
      readline.close();
      return;
    }
    const numeroArr = numero.split("");
    console.log(numeroArr);
    if (isNaN(Number(numero))) {
      console.log("Error: Ingrese un numero");
    } else if (numero.length !== 4) {
      console.log("Error: Ingrese un numero de 4 cifras");
    } else {
      for (let i = 0; i < numeroArr.length; i++) {
        if (numeroSecreto.includes(numeroArr[i])) {
          if (numeroArr[i] === numeroSecreto[i]) {
            result += "X";
          } else {
            result += "-";
          }
        }
      }
      console.log("Salida:", result);
    }
  } while (numero != numeroSecreto.join(""));
  readline.close();
  return console.log("Correcto!");
}

codeBreaker();
