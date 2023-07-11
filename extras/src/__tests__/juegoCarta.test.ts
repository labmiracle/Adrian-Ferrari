import juegoCarta, { barajaEspañola } from "../juegoCarta";

test("Juego Cartas", () => {
    const reg = /(^Jugador [1-4] saco [0-9]{1,2} de (Oro|Basto|Copa|Espada)\n){4}(^Gano el jugador [1-4]|Hubo un empate!)/m;
    expect(juegoCarta(4, barajaEspañola)).toMatch(reg);
});
