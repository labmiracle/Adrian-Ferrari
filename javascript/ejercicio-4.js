function palabraMasLarga(str) {
  if (!str) return "Error: Ingresar una frase";
  const palabras = str.split(" ");
  let palabraMasLarga = palabras.shift();
  for (const palabra of palabras) {
    palabraMasLarga = palabraMasLarga.length > palabra.length ? palabraMasLarga : palabra;
  }
  return palabraMasLarga;
}

console.log(palabraMasLarga("Erase una vez que se era"));

function primeraMayuscula(str) {
  if (!str) return "Error: Ingresar una frase";
  const palabras = str.split(" ");
  return palabras.map((palabra) => palabra[0].toUpperCase() + palabra.substring(1)).join(" ");
}

console.log(primeraMayuscula("En un lugar de la Mancha"));
