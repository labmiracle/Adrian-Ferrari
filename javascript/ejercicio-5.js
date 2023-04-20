function camelize(str) {
  if (!str) return "Error: Ingresar una frase";
  const palabras = str.split(" ");
  const primeraPalabra = palabras.shift().toLowerCase();
  const palabrasCamel = palabras.map((palabra) => palabra[0].toUpperCase() + palabra.substring(1));
  palabrasCamel.unshift(primeraPalabra);
  return palabrasCamel.join("");
}

console.log(camelize("Hola a todos que tal"));
