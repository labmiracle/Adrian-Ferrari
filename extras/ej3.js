/* 
Vamos a crear un juego de cartas en el cual cada jugador saca una carta del mazo y el que
obtiene el número más alto gana.
1. Tener en cuenta que al sacar una carta del mazo, no puede salir la misma carta, por lo
menos mientras se este utilizando ese mazo
2. Las cartas que saca cada jugador deben salir en orden aleatorio 
*/

const baraja = [...Array(48)].map(
  function (e, i) {
    // paloIndice => 0, 0, 0, ...12 veces 0, 12/12=1, 1, 1, ...12 veces 1, 2, 2, ...
    const paloIndice = Math.floor(i / 12);
    //[oro, 0+1-0*12=1], [oro, 2], ... [oro, 12], [copa, 12+1-1*12=1], [copa, 2], ...
    return [this[paloIndice], i + 1 - paloIndice * 12];
  },
  ["Oro", "Copa", "Basto", "Espada"]
);

function juegoCarta(baraja, jugadores) {
  const barajaMezclada = baraja.sort(() => Math.random() - 0.5);
  const cartasJugadores = [];
  for (let i = 0; i < jugadores; i++) {
    let carta = barajaMezclada.pop();
    //push solo el numero de la carta
    cartasJugadores.push(carta[1]);
    console.log(`Jugador ${i + 1} saco`, carta);
  }
  const maxCarta = Math.max(...cartasJugadores);
  const jugadorGanador = cartasJugadores.indexOf(maxCarta) + 1;
  //revisa si hay multiples cartas maximas
  const countGanador = cartasJugadores.reduce((acc, curr) => (curr === maxCarta ? acc + 1 : acc), 0);
  if (countGanador > 1) return console.log("Hubo un empate!");
  console.log("Gano el jugador", jugadorGanador);
}

juegoCarta(baraja, 4);
