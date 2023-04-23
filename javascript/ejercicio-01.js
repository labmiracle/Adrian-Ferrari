function golfScore(par, strokes) {
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

  if (strokes < 0 || par < 0) return "Error: Ingresar numeros positivos!";

  if (strokes === 1) return names[0];
  if (strokes <= par - 2) return names[1];
  if (strokes === par - 1) return names[2];
  if (strokes === par) return names[3];
  if (strokes === par + 1) return names[4];
  if (strokes === par + 2) return names[5];
  return names[6];
}

console.log(golfScore(5, 1));
console.log(golfScore(5, 3));
console.log(golfScore(5, 4));
console.log(golfScore(5, 5));
console.log(golfScore(5, 6));
console.log(golfScore(5, 7));
console.log(golfScore(5, 8));

console.log(golfScore(-3, 1));
