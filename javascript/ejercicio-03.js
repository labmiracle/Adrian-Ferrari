function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
  if (
    typeof velocidadCrecimiento !== "number" ||
    typeof velocidadDecrecimiento !== "number" ||
    typeof alturaDeseada !== "number"
  )
    throw new Error("Los parametros tiene que ser numeros");
  let dias = 0;
  let alturaPlanta = 0;
  const velocidadTotal = velocidadCrecimiento - velocidadDecrecimiento;
  if (velocidadTotal <= 0) return Infinity;
  while (alturaPlanta < alturaDeseada) {
    alturaPlanta += velocidadTotal;
    dias++;
  }
  return dias;
}

console.assert(calcularDiasCrecimiento(2, 1, 12) === 12);
console.assert(calcularDiasCrecimiento(1, 1, 12) === Infinity);
