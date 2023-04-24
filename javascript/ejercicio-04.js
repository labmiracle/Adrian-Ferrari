function palabraMasLarga(str) {
  if (!str) throw new Error("Ingresar una frase");
  const palabras = str.split(" ");
  let palabraMasLarga = palabras.shift();
  for (const palabra of palabras) {
    palabraMasLarga = palabraMasLarga.length > palabra.length ? palabraMasLarga : palabra;
  }
  return palabraMasLarga;
}

console.assert(palabraMasLarga("Erase una vez que se era") === "Erase");

function primeraMayuscula(str) {
  if (!str) throw new Error("Ingresar una frase");
  const palabras = str.split(" ");
  return palabras.map((palabra) => palabra[0].toUpperCase() + palabra.substring(1)).join(" ");
}

console.assert(primeraMayuscula("En un lugar de la Mancha") === "En Un Lugar De La Mancha");
