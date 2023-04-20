function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
  let dias = 0;
  let alturaPlanta = 0;
  if (velocidadCrecimiento === velocidadDecrecimiento || velocidadCrecimiento < velocidadDecrecimiento)
    return "La planta tardara ∞ dias en crecer";
  while (alturaPlanta < alturaDeseada) {
    alturaPlanta += velocidadCrecimiento - velocidadDecrecimiento;
    dias++;
  }
  return dias;
}

console.log(calcularDiasCrecimiento(1, 1, 12));
