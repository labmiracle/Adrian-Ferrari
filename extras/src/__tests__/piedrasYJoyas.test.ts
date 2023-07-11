import piedrasYJoyas from "../piedrasYJoyas";

/*
Armar una función que reciba dos cadenas. Una de las cadenas son joyas que representan
los tipos de piedras preciosas que tenemos. La otra cadena reporesenta las piedras es un
tipo que tenemos. Quieremos saber cuántas de las piedras son también joyas. 
*/

test("piedras y joyas", () => {
    expect(piedrasYJoyas("aA", "aAAbbbb")).toBe(3);
    expect(piedrasYJoyas("z", "ZZ")).toBe(0);
});
