function palabraMasLarga(str) {
  const palabras = str.split(" ");
  let palabraMasLarga = palabras[0];
  for (let i = 1; i < palabras.length; i++) {
    palabraMasLarga = palabraMasLarga.length > palabras[i].length ? palabraMasLarga : palabras[i];
  }
  return palabraMasLarga;
}

console.log(palabraMasLarga("Erase una vez que se era"));

function primeraMayuscula(str) {
  const palabras = str.split(" ");
  return palabras.map((palabra) => palabra[0].toUpperCase() + palabra.substring(1)).join(" ");
}

console.log(primeraMayuscula("En un lugar de la Mancha"));
