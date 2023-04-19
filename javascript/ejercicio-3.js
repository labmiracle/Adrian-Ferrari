function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
  let dias = 0;
  let alturaPlanta = 0;
  while (alturaPlanta < alturaDeseada) {
    alturaPlanta += velocidadCrecimiento - velocidadDecrecimiento;
    dias++;
  }
  return dias;
}

console.log(calcularDiasCrecimiento(3, 1, 12));
